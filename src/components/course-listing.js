import { Link } from "gatsby"
import React, { useState } from "react"
import { cleanCourseId, cleanCourseTitle } from "../utils/course-namer"

const Course = ({ id, title, onClick, showTitle, isSelected }) => {
  const display = showTitle ? cleanCourseTitle(title) : cleanCourseId(id)

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={
          "hidden md:inline-block course-pill" + (isSelected ? " selected" : "")
        }
        onClick={onClick}
        onKeyDown={onClick}
      >
        {display}
      </div>
      <Link
        className="md:hidden inline-block course-pill"
        to={`/courses/${id}`}
      >
        {display}
      </Link>
    </>
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
      <Link
        className="font-semibold btn btn-blue hover:text-white border-blue-200 p-2 text-center mt-auto"
        to={`/courses/${id}`}
      >
        View more details
      </Link>
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
      <div className="hidden">
        <CourseControls /> {/* TODO add more control for searching courses */}
      </div>
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
          className="md:w-1/3 hidden md:flex flex-col sticky top-0"
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
