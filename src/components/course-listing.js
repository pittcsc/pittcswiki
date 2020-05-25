import { Link } from "gatsby"
import React, { useState } from "react"
import { cleanCourseId, cleanCourseTitle } from "../utils/course-namer"
import TermPills from "./term-pills"

const Course = ({ id, title, onClick, showTitle, isSelected }) => {
  const displayId = cleanCourseId(id)
  const displayTitle = cleanCourseTitle(title)
  const display = showTitle ? displayId + " - " + displayTitle : displayId

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={
          "hidden md:inline-block course-pill" +
          (isSelected ? " selected" : "") +
          (showTitle ? " w-auto " : "")
        }
        onClick={onClick}
        onKeyDown={onClick}
      >
        {display}
      </div>
      <Link
        className={
          "md:hidden inline-block course-pill" + (showTitle ? " w-auto " : "")
        }
        to={`/courses/${id}`}
      >
        {display}
      </Link>
    </>
  )
}

const CourseInteractiveListing = ({
  setCurrentCourse,
  filters: { showTitles, showHidden, termOfferedFilter },
  courseCategories,
  selectedCourseId,
}) => {
  return courseCategories.map((category) => {
    const show = showHidden || category.display !== "hidden"
    const courses =
      termOfferedFilter === "OFF"
        ? category.courses
        : category.courses.filter(
            ({ terms_offered }) => terms_offered[termOfferedFilter]
          )
    return show ? (
      <div key={category.name} className="mb-8">
        <h2 className="mb-2">{category.name}</h2>
        {category.description && (
          <p dangerouslySetInnerHTML={category.description}></p>
        )}
        <div>
          {courses.map((course) => (
            <Course
              key={course.id}
              showTitle={showTitles}
              {...course}
              onClick={() => setCurrentCourse(course)}
              isSelected={selectedCourseId === course.id}
            />
          ))}
        </div>
      </div>
    ) : null
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
      <h1 className="mb-2">{cleanCourseId(id)}</h1>
      <h2 className="mb-2">{cleanCourseTitle(title)}</h2>
      <TermPills termsMap={terms_offered} />
      <p className="mt-2">{requirements}</p>
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
    <div>
      <h3>Click a course on the left to see details</h3>
      <p>With the controls at the top, you can filter and more!</p>
    </div>
  )

  return (
    <div className="flex flex-col h-full p-8 shadow-xl border rounded br-8">
      {content}
    </div>
  )
}

const CourseControls = ({
  filters: { showTitles, showHidden, termOfferedFilter },
  setFilters: { setShowTitles, setShowHidden, setTermOfferedFilter },
}) => {
  const handleSetTermOffered = (e) => {
    setTermOfferedFilter(e.target.value)
  }
  return (
    <div className="my-4 flex content-center flex-none">
      <label>
        <input
          type="checkbox"
          checked={showTitles}
          onChange={(e) => setShowTitles(e.target.checked)}
        />
        Show Course Titles
      </label>
      <label>
        <input
          type="checkbox"
          checked={showHidden}
          onChange={(e) => setShowHidden(e.target.checked)}
        />
        Show Hidden Classes
      </label>
      <div>
        Filter by Term Offered:
        <fieldset id="term_offered">
          <label>
            <input
              type="radio"
              value="FALL"
              checked={termOfferedFilter === "FALL"}
              name="term_offered"
              onChange={handleSetTermOffered}
            />
            Fall
          </label>
          <label>
            <input
              type="radio"
              value="SPRING"
              nane="term_offered"
              checked={termOfferedFilter === "SPRING"}
              onChange={handleSetTermOffered}
            />
            Spring
          </label>
          <label>
            <input
              type="radio"
              value="SUMMER"
              name="term_offered"
              checked={termOfferedFilter === "SUMMER"}
              onChange={handleSetTermOffered}
            />
            Summer
          </label>
          <button
            className={
              termOfferedFilter === "OFF"
                ? "hidden"
                : " text-gray-800 px-2 py-1 border"
            }
            onClick={() => setTermOfferedFilter("OFF")}
          >
            Clear Term Offered Filter
          </button>
        </fieldset>
      </div>
    </div>
  )
}

const CourseListing = ({ courseList, courseCategories }) => {
  const [currentCourse, setCurrentCourse] = useState({})
  const [showTitles, setShowTitles] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [termOfferedFilter, setTermOfferedFilter] = useState("OFF")

  const filters = { showTitles, showHidden, termOfferedFilter }
  const setFilters = { setShowTitles, setShowHidden, setTermOfferedFilter }
  return (
    <div className="">
      <div>
        <CourseControls filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3">
          <CourseInteractiveListing
            filters={filters}
            setCurrentCourse={setCurrentCourse}
            selectedCourseId={currentCourse.id}
            courseCategories={courseCategories}
            courses={courseList.courses}
          />
        </div>
        <div
          className="md:w-1/3 hidden md:flex flex-col sticky top-0"
          style={{
            height: "70vh",
            top: "2rem",
            minWidth: "25rem",
            maxHeight: "45rem",
          }}
        >
          <CourseQuickView {...currentCourse} />
          {/* <CourseControls /> */}
        </div>
      </div>
      <p className="text-sm italic">
        This list was last updated on{" "}
        {new Date(courseList.metadata.generated).toDateString()}. For the most
        up to date information, look at{" "}
        <a href="http://courses.sci.pitt.edu/courses">
          Pitt's official website
        </a>
        .
      </p>
    </div>
  )
}

export default CourseListing
