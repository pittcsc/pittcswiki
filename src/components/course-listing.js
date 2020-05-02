import { Link } from "gatsby"
import React, { useState } from "react"
import { cleanCourseId, cleanCourseTitle } from "../utils/course-namer"

const Course = ({ id, title, onClick, showTitle, isSelected }) => {
  const display = showTitle ? cleanCourseTitle(title) : cleanCourseId(id)

  const classes = isSelected
    ? "bg-gray-700 border-gray-800 text-white"
    : "border"
  return (
    <div
      className={
        "rounded-full border mr-4 py-2 px-4 my-1 inline-block hover:bg-gray-700 hover:border-gray-800 hover:text-white cursor-pointer " +
        classes
      }
      onClick={onClick}
    >
      {display}
    </div>
  )
}

const CourseInteractiveListing = ({
  setCurrentCourse,
  courseCategories,
  selectedCourseId,
}) => {
  return courseCategories.map((category) => {
    return (
      <div key={category.name} className="mb-8">
        <h2 className="mb-2">{category.name}</h2>
        <div>
          {category.courses.map((course) => (
            <Course
              key={course.id}
              {...course}
              onClick={() => setCurrentCourse(course)}
              isSelected={selectedCourseId === course.id}
            />
          ))}
        </div>
      </div>
    )
  })
}

const CourseQuickView = ({
  id,
  credits,
  description,
  requirements,
  title,
  terms_offered,
}) => {
  const content = id ? (
    <>
      <h1>{cleanCourseId(id)}</h1>
      <h2>{cleanCourseTitle(title)}</h2>
      <p>{requirements}</p>
      <p className="text-xs">
        {description.length > 850
          ? description.substring(0, 800) + "…"
          : description}
      </p>
      <div className="btn btn-blue hover:text-white border-blue-200 p-2 text-center mt-auto">
        <Link className="font-semibold" to={`courses/${id}`}>
          View more details
        </Link>
      </div>
    </>
  ) : (
    <h3>Click a course on the left to see details</h3>
  )

  return (
    <div className="flex flex-col h-full p-8 shadow-xl border rounded br-8">
      {content}
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

const CourseListing = ({ courseList, courseCategories }) => {
  const [currentCourse, setCurrentCourse] = useState({})

  return (
    <div className="">
      <p className="">Last updated {courseList.metadata.generated}</p>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3">
          <CourseInteractiveListing
            setCurrentCourse={setCurrentCourse}
            selectedCourseId={currentCourse.id}
            courseCategories={courseCategories}
            courses={courseList.courses}
          />
        </div>
        <div
          className="md:w-1/3 flex flex-col sticky top-0"
          style={{ height: "70vh", top: "2rem" }}
        >
          <CourseQuickView {...currentCourse} />
          {/* <CourseControls /> */}
        </div>
      </div>
    </div>
  )
}

export default CourseListing
