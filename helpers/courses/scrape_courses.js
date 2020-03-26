const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const calculateCourseLevelInfo = require("./calculate_course_level_info").calculateCourseLevelInfo;

// TODO make a CI check to ensure we have the same courses
// that show up on this website

const BASE_SCI_URL = "http://courses.sci.pitt.edu/";
const SCI_URL = `${BASE_SCI_URL}courses`;

const getCourseHTML = async () => {
	const response = await request(SCI_URL)
	return response;
}

const COURSE_LI_CLASS_NAME = "li.course.computer-science";

const parseHtml = (html) => {
	const $ = cheerio.load(html);
	const courses = $("ul").find(COURSE_LI_CLASS_NAME);
	const courseList = courses.toArray().map(li => {
		const $a = cheerio.load(li)("a");
		const href = BASE_SCI_URL + $a.attr("href");
		const fullTile = $a.text();
		const title = fullTile.split(" ").splice(2).join(" ");
		const id = fullTile.split(" ").slice(0, 2).join("");
		return {
			href,
			title,
			id
		}
	})
	return courseList;
}



const CACHED_SCRAPE_DATA_FILENAME = "scraped_course_data_cache.json"

async function run() {
	const html = await getCourseHTML();
	const info = parseHtml(html);
	const filePath = path.join(__dirname, CACHED_SCRAPE_DATA_FILENAME);
	fs.writeFileSync(filePath, JSON.stringify(info, null, 4))
}

run();