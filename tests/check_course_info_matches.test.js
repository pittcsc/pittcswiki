const fs = require("fs").promises
const path = require("path")
const {
  scrapeSciCoursesAndGetLocal,
} = require("../helpers/courses/course_scraper")

test("There are no differences between SCI website and ours", async () => {
  // If this test fails,
  // A. Did SCI changed course requirements? If so, see what was added
  // or deleted. Then, run `npm run scrape_courses`. Then,
  // add the course to pages/courses/markdown
  //

  // B. Did SCI update their HTML page? If so, this would break
  // the scraper. So, you need to edit the course_scraper.js file
  // and fix it!
  const { remote, local } = await scrapeSciCoursesAndGetLocal()
  expect(remote).toEqual(local)
})
