import { Link } from "gatsby"
import React, { useState } from "react"
import { cleanCourseId, cleanCourseTitle } from "../../utils/course-namer"
import { CSLegendData, PrereqLegend, RequirementDots } from "./requirements"
import COURSE_REQUIREMENTS from "../../data/requirements.json"
import { CourseQuickView } from "./course-quick-view"

const Course = ({
  id,
  title,
  onClick,
  showTitle,
  isSelected,
  customCss,
  isPrereqFilterModeOn = false,
  colorLegend = {},
}) => {
  // Supply a color legend if you would like to apply colors!
  const displayId = cleanCourseId(id)
  const displayTitle = cleanCourseTitle(title)
  const display = showTitle ? displayTitle : displayId
  const highlightColor = isPrereqFilterModeOn ? colorLegend[id] : null
  // this is confusing because it has the html for both mobile format and
  // regular
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={
          "hidden md:inline-block course-pill" +
          (isSelected ? " selected" : "") +
          (showTitle || isPrereqFilterModeOn ? " w-auto " : "") +
          (customCss ? customCss : "")
        }
        style={
          highlightColor && {
            borderColor: highlightColor,
            boxShadow: `0px 0px 4px ${highlightColor}`,
          }
        }
        onClick={onClick}
        onKeyDown={onClick}
      >
        {!highlightColor && isPrereqFilterModeOn && (
          <RequirementDots
            legend={CSLegendData}
            requirements={COURSE_REQUIREMENTS[id]}
          />
        )}
        {display}
      </div>
      <Link
        className={
          "md:hidden inline-block course-pill" +
          (showTitle || isPrereqFilterModeOn ? " w-auto " : "")
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
  filters: { showTitles, showHidden, termOfferedFilter, isPrereqFilterModeOn },
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
              isPrereqFilterModeOn={isPrereqFilterModeOn}
              colorLegend={CSLegendData}
            />
          ))}
        </div>
      </div>
    ) : null
  })
}

const CourseControls = ({ filters, setFilters }) => {
  const handleSetTermOffered = (e) => {
    setFilters({ ...filters, termOfferedFilter: e.target.value })
  }
  const turnOffTermOfferedFilter = () => {
    setFilters({ ...filters, termOfferedFilter: "OFF" })
  }
  const handleCheckbox = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.checked }
    if (e.target.name === "showHidden" && e.target.checked)
      newFilters.termOfferedFilter = "OFF"
    setFilters(newFilters)
  }
  return (
    <div className="">
      <div className="md:flex align-center items-center">
        <label>
          <input
            type="checkbox"
            name="showTitles"
            checked={filters.showTitles}
            onChange={handleCheckbox}
          />
          Show Course Titles
        </label>
        <label>
          <input
            type="checkbox"
            name="isPrereqFilterModeOn"
            checked={filters.isPrereqFilterModeOn}
            onChange={handleCheckbox}
          />
          Filter Based on Requirements
        </label>
        <label>
          <input
            type="checkbox"
            name="showHidden"
            checked={filters.showHidden}
            onChange={handleCheckbox}
          />
          Show Hidden Classes
        </label>
      </div>
      <div>
        <span className="ml-2 font-bold">Offered in:</span>
        <div className="ml-2" id="term_offered">
          <button
            value="FALL"
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "FALL" && "active")
            }
            name="term_offered"
            onClick={handleSetTermOffered}
          >
            Fall
          </button>
          <button
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "SPRING" && "active")
            }
            value="SPRING"
            nane="term_offered"
            onClick={handleSetTermOffered}
          >
            Spring
          </button>
          <button
            className={
              "btn bg-white md:w-20 small " +
              (filters.termOfferedFilter === "SUMMER" && "active")
            }
            value="SUMMER"
            name="term_offered"
            onClick={handleSetTermOffered}
          >
            Summer
          </button>
          <button
            className={
              filters.termOfferedFilter === "OFF"
                ? "hidden"
                : "ml-1 small bg-red-100 btn"
            }
            onClick={turnOffTermOfferedFilter}
          >
            Clear Term Offered Filter
          </button>
        </div>
      </div>
    </div>
  )
}

const CourseListing = ({ courseList, courseCategories }) => {
  const [state, setState] = useState({
    currentCourse: {},
    showTitles: false,
    showHidden: false,
    isPrereqFilterModeOn: false,
    termOfferedFilter: "OFF",
  })

  const [showCourseFilters, setShowCourseFilters] = useState(false)

  return (
    <div>
      <div className="my-4 content-center course-controls flex-none hidden md:block">
        <button
          class="btn"
          onClick={() => setShowCourseFilters(!showCourseFilters)}
        >
          {(showCourseFilters ? "Hide" : "Show") + " Course Filter Controls"}
        </button>
        {showCourseFilters && (
          <div className="mt-4 border px-2 py-3 md:flex align-center items-center">
            <CourseControls filters={state} setFilters={setState} />
          </div>
        )}
      </div>
      <div
        className={
          state.isPrereqFilterModeOn ? "mb-4 px-2 py-3 border p-1" : "hidden"
        }
      >
        <h4 className="mb-0">Filter by Requirement</h4>
        <p className="mb-1">
          We color coded each core class to make it easier to visualize which
          classes have which requirements.
        </p>
        <div className="inline-block mb-3">
          <PrereqLegend legendData={CSLegendData} />
        </div>
        <Course
          key={"CS1622"}
          showTitle={state.showTitles}
          {...{ id: "CS1622", title: "INTRO TO COMPILERS" }}
          isSelected={state.currentCourse.id === "CS1622"}
          onClick={() => null}
          isPrereqFilterModeOn={true}
          colorLegend={CSLegendData}
        />
        <p className="mb-0">
          For example, this course has the prerequisites of CS 441 and CS 447
          based on its dot colors.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3 md:pr-1">
          <CourseInteractiveListing
            filters={state}
            setCurrentCourse={(course) =>
              setState({ ...state, currentCourse: course })
            }
            selectedCourseId={state.currentCourse.id}
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
          <div className="flex flex-col h-full p-8 shadow-xl border rounded br-8">
            <CourseQuickView {...state.currentCourse}>
              <div>
                <h3>Click a course on the left to see details</h3>
                <p>
                  With the controls at the top, you can filter. If you want to
                  know more about a class, click view details after selecting
                  it. Dont forget the search bar at the top right of the page
                  works too!
                </p>
              </div>
            </CourseQuickView>
          </div>
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
