const getNumFromCourseId = (id) => {
  const backFour = id.length - 4
  return Number(id.substring(backFour))
}

const cleanCourseId = (id) => {
  const backFour = id.length - 4
  const dept = id.substring(0, backFour)
  const num = getNumFromCourseId(id) + ""
  return dept + " " + num.padStart(3, "0")
}

const cleanCourseTitle = (title) => {
  return title.replace("INTRODUCTION", "INTRO")
}

module.exports = {
  cleanCourseId,
  cleanCourseTitle,
  getNumFromCourseId,
}
