# Ideally in the future the Pitt API will be hosted so it doesn't need to exist locally.
from pittapi import ratemyprofessors
import json
from typing import List, Tuple
import gspread
from oauth2client.service_account import ServiceAccountCredentials

SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
COURSE_REVIEW_SHEET_KEY = '1JsJKialTXTAEPljU9GDAJnxvsJUL3rKdNNBRvLzXcEk'

RMP_DATA_FIELDS = [
  "professor_id",
  "total_ratings",
  "average_rating",
  "average_difficulty_rating",
  "rating_tag_strings",
  "professor_first_name",
  "professor_last_name",
  "professor_full_name",
]

def get_professor_names() -> List[Tuple[str, str, str]]:
  credentials = ServiceAccountCredentials.from_json_keyfile_name('google_api_secret.json', SCOPES)
  client = gspread.authorize(credentials)

  course_review_worksheet = client.open_by_key(COURSE_REVIEW_SHEET_KEY).get_worksheet(2)

  professor_first_names = course_review_worksheet.col_values(
    course_review_worksheet.find('profFirstName').col)[1:]
  professor_last_names = course_review_worksheet.col_values(
    course_review_worksheet.find('profLastName').col)[1:]
  professor_full_names = course_review_worksheet.col_values(
    course_review_worksheet.find('prof').col)[1:]
  
  # First converting to set removes duplicates (alternate spellings of the same name will not be
  # removed, and this is intentional as these alternate spellings will be reflected on the
  # frontend testimonial as well).
  return list(set(zip(professor_first_names, professor_last_names, professor_full_names)))

def main() -> None:
  professor_names = get_professor_names()
  rmp_professor_data = []

  for (first_name, last_name, full_name) in professor_names:
    rmp_results = ratemyprofessors.get_rmp_by_name_fuzzy(
        prof_first_name=first_name,
        prof_last_name=last_name,
        num_results=1,
        response_fields=RMP_DATA_FIELDS)
    if (len(rmp_results) > 0):
      rmp_professor_data.append(rmp_results[0])
      print("Found RMP data for: {}".format(full_name))
    else:
      print("Could not find RMP data for: {}".format(full_name))

  with open('./src/data/graphql/rmp_data.json', 'w') as out_file:
    json.dump(rmp_professor_data, out_file)

if __name__ == "__main__":
  main()