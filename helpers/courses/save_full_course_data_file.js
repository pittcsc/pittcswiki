const fs = require("fs")
const path = require("path")
const { calculateCourseLevelInfo } = require("./calculate_course_level_info")
const courseData = require("./scraped_course_data_cache.json")

const FILENAME = "course_list.json"

const saveFile = (data) => {
  const toWrite = {
    metadata: {
      updated: new Date(),
    },
    courses: data,
  }
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "pages",
    "courses",
    "helpers",
    FILENAME
  )
  fs.writeFileSync(filePath, JSON.stringify(toWrite, null, 4))
}

const data = courseData.map((course) => {
  course.levelInfo = calculateCourseLevelInfo(course.id)
  return course
})

saveFile(data)
