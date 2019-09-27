const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

// TODO make a CI check to ensure we have the same courses
// that show up on this website

const SCI_URL = "http://courses.sci.pitt.edu/courses";

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
		const href = SCI_URL + $a.attr("href");
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

const saveFile = (data) => {
	const FILENAME = 'course_list.json';
	const toWrite = {
		metadata: {
			updated: new Date()
		},
		courses: data
	}
	const filePath = path.join(__dirname, "..", "..", "src", "pages", "courses", "helpers", FILENAME);
	fs.writeFileSync(filePath, JSON.stringify(toWrite, null, 4))
}

async function run() {
	const html = await getCourseHTML();
	const info = parseHtml(html);
	saveFile(info);
}

run();