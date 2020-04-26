import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import COURSE_LIST_JSON from "./courses/helpers/course_list.json"

/*
Testimonials are built up from this Google Sheet. Its like a fake database.
https://docs.google.com/spreadsheets/d/1JsJKialTXTAEPljU9GDAJnxvsJUL3rKdNNBRvLzXcEk/edit#gid=349594831
*/

const Course = ({ id, title }) => {
  return (
    <div class="course-listing-div">
      <Link to={`courses/${id}`}>
        {id} - {title}
      </Link>
    </div>
  )
}

const CourseListing = () => {
  const courses = COURSE_LIST_JSON.courses.map((course) => (
    <Course key={course.id} {...course} />
  ))
  return (
    <div className="course-listing-wrapper">
      <p className="last-updated-line">
        Last updated {COURSE_LIST_JSON.metadata.updated}
      </p>
      <div className="course-listings">{courses}</div>
    </div>
  )
}

const CoursesPage = () => (
  <Layout>
    <SEO title="Courses" />
    <h1>Courses</h1>
    <hr />
    <CourseListing />
    <Link to="/">Homepage</Link>
  </Layout>
)

export default CoursesPage
