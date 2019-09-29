import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import COURSE_LIST_JSON from "./courses/helpers/course_list.json";


/*
Testimonials are built up from this Google Sheet. Its like a fake database.
https://docs.google.com/spreadsheets/d/1oqIY5x0AOa2WbKYTp0eK01bXpWwKiUV02OKpnOCMkFg/edit#gid=0
*/



const Course = ({ id, title }) => {
  return (
    <div class="course-listing-div">
    <Link to={`courses/${id}`}>{id} - {title}</Link>
    </div>
  );
}

const CourseListing = () => {
  const courses = COURSE_LIST_JSON.courses.map(course => <Course key={course.id} {...course} />);
  return (
    <div className="course-listing-wrapper">
      <div className="course-listings">
        { courses }
      </div>
      <p className="last-updated-line">Last updated {COURSE_LIST_JSON.metadata.updated}</p>
    </div>
  );
}

const CoursesPage = () => (
  <Layout>
    <SEO title="Courses" />
    <h1>Courses</h1>
    <p>What classes should you take?</p>
	<CourseListing />
    <Link to="/">Homepage</Link>
  </Layout>
)

export default CoursesPage
