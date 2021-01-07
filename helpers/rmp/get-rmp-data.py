# Ideally in the future the Pitt API will be hosted so it doesn't need to exist locally.
# Currently requires fork of Pitt API with RMP scraper: https://github.com/Richie78321/PittAPI
from pittapi import ratemyprofessors
import json
from typing import List, Tuple, Union, Dict, Any
import gspread
from oauth2client.service_account import ServiceAccountCredentials

SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
COURSE_REVIEW_SHEET_KEY = '1JsJKialTXTAEPljU9GDAJnxvsJUL3rKdNNBRvLzXcEk'

RMP_DATA_FIELDS = [
  "professor_id",
  "average_rating",
  "average_difficulty_rating",
  "professor_full_name",
]

RMP_ALTERNATE_NAME_FIELD = "professor_all_names"

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

def get_professor_data(
  full_name: str, first_name: str, last_name: str) -> Union[Dict[str, Any], None]:
  rmp_results = ratemyprofessors.get_rmp_by_name_fuzzy(
    prof_first_name=first_name,
    prof_last_name=last_name,
    num_results=1,
    response_fields=RMP_DATA_FIELDS)
  
  if len(rmp_results) > 0:
    result = rmp_results[0]
    result[RMP_ALTERNATE_NAME_FIELD] = [full_name]
    return result
  else:
    return rmp_results[0] if len(rmp_results) > 0 else None

def main() -> None:
  professor_names = get_professor_names()
  rmp_professor_data = {}

  for (first_name, last_name, full_name) in professor_names:
    professor_data = get_professor_data(full_name, first_name, last_name)
    if professor_data != None:
      if professor_data['professor_id'] in rmp_professor_data:
        rmp_professor_data[professor_data['professor_id']][RMP_ALTERNATE_NAME_FIELD].append(
          full_name)
        print("Appended alternate spelling to existing entry: {}".format(
          rmp_professor_data[professor_data['professor_id']][RMP_ALTERNATE_NAME_FIELD]))
      else:
        rmp_professor_data[professor_data['professor_id']] = professor_data
        print("Got RMP data for: {}".format(full_name))
    else:
      print("Failed to get RMP data for: {}".format(full_name))

  with open('./src/data/graphql/rmp_data.json', 'w') as out_file:
    json.dump([data for (professor_id, data) in rmp_professor_data.items()], out_file)

if __name__ == "__main__":
  main()
