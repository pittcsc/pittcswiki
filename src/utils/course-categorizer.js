const getNumFromCourseId = require("./course-namer").getNumFromCourseId
const categoriesData = require("../pages/courses/categories.json")

// This buckets courses into different types as specified in the
// categories.json file required above

const applyFilter = (courseMap, filter) => {
  let [start, end] = filter.split(" - ")
  ;[start, end] = [getNumFromCourseId(start), Number(end)]
  return Object.keys(courseMap)
    .map((id) => {
      const num = getNumFromCourseId(id)
      if (courseMap[id].used && num >= start && num <= end) {
        courseMap[id].used = false
        return courseMap[id].data
      }
      return false
    })
    .filter((course) => !!course)
}

let categorized = null

function categorize(courseList, categories = categoriesData) {
  if (categorized) return categorized

  const courseMap = courseList.reduce((prev, current) => {
    prev[current.id] = { used: true, data: current }
    return prev
  }, {})

  categorized = categories.map((category) => {
    category.courses = category.courses
      .flatMap((id) => {
        if (courseMap[id]) {
          courseMap[id].used = false
          return courseMap[id].data
        } else if (id.indexOf(" - ") >= 0) {
          // In the categories.json you can do a filter like
          // CS1509 - 1700
          return applyFilter(courseMap, id)
        }
      })
      .filter((course) => !!course)
    return category
  })

  return categorized
}

module.exports = categorize
