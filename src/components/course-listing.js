import { Link } from "gatsby"
import React, { useState } from "react"

const Course = ({ id, title, onClick }) => {
  return (
    <div className="p-2 br-2 my-1" onClick={onClick}>
      {/* <Link to={`courses/${id}`}> */}
      {id} - {title}
      {/* </Link> */}
    </div>
  )
}

const CourseQuickView = ({
  id,
  credits,
  description,
  requirements,
  title,
  terms_offered,
}) => {
  if (!id) return "Click a course on the left to see details"

  return (
    <div className="h-full p-8 shadow-xl border rounded br-8">
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{requirements}</p>
      <p className="text-xs">{description}</p>
    </div>
  )
}

const CourseControls = () => {
  return (
    <div className="my-4 flex content-center flex-none">
      <button className="btn mr-2">Control</button>
      <button className="btn mr-2">Control</button>
      <button className="btn">Control</button>
    </div>
  )
}

const CourseListing = ({ courseList }) => {
  const [currentCourse, setCurrentCourse] = useState(null)

  const courses = courseList.courses.map((course) => (
    <Course
      key={course.id}
      {...course}
      onClick={() => setCurrentCourse(course)}
    />
  ))
  return (
    <div className="">
      <p className="">Last updated {courseList.metadata.generated}</p>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3">{courses}</div>
        <div
          className="md:w-1/3 flex flex-col sticky top-0"
          style={{ height: "70vh" }}
        >
          <CourseControls />
          <CourseQuickView {...currentCourse} />
        </div>
      </div>
    </div>
  )
}

export default CourseListing
