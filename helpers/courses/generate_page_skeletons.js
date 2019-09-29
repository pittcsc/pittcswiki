const TEMPLATE =
`---
path: "/courses/{{ id }}"
title: "{{ title }}"
id: "{{ id }}"
---
[Link to SCI]("{{ href }}")

# General Information

# Advice


# Prerequisites
<!-- PREREQ_REPLACEMENT (Do not remove) -->

<!-- END PREREQ_REPLACEMENT (Do not remove) -->
# Topics Covered
	- 
	-
	-
# Workload

<!-- TESTIMONIALS
# Testimonials
This gets replaced with Gatsby, its
data comes from Google Sheets for easier
editing!
-->

# Resources
`

const courseList = require("../../src/pages/courses/helpers/course_list.json").courses;
const fs = require("fs");
const path = require("path");
const replaceTemplate = require("../mini_handlebars");

const BASE_PATH = path.join(__dirname, "..", "..", "src", "pages", "courses", "courses_markdown");

function updatePage() {}

const DO_NOT_REPLACE_PAGES = false;

courseList.forEach((data) => {
	const id = data.id;
	const currentPath = path.join(BASE_PATH, id+".md");
	if(fs.existsSync(currentPath) && DO_NOT_REPLACE_PAGES) {
		updatePage(currentPath, data)
	} else {
		const toWrite = replaceTemplate(TEMPLATE, {
			...data,
			date: new Date().toDateString()
		})
		fs.writeFileSync(currentPath, toWrite);
	}
})
