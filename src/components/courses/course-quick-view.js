import TermPills from "../term-pills"
import { cleanCourseId, cleanCourseTitle } from "../../utils/course-namer"
import React from "react"
import { Link } from "gatsby"
import COURSE_REQUIREMENTS from "../../data/requirements.json"
import { RequirementsListing } from "../courses/requirements"

const CourseQuickViewContent = ({
  id,
  credits,
  description,
  requirements,
  title,
  terms_offered,
}) => (
  <>
    <h1 className="mb-2">{cleanCourseId(id)}</h1>
    <h2 className="mb-2">{cleanCourseTitle(title)}</h2>
    <TermPills termsMap={terms_offered} />
    <div className="mt-4 mb-2">
      <RequirementsListing requirements={COURSE_REQUIREMENTS[id]} />
    </div>
    <p className="text-xs">
      {description.length > 850
        ? description.substring(0, 800) + "…"
        : description}
    </p>
    <Link
      className="font-semibold btn btn-blue hover:text-white border-blue-200 p-2 text-center mt-auto"
      to={`/courses/${id}`}
    >
      View student reviews
    </Link>
  </>
)

const CourseQuickView = ({
  id,
  credits,
  description,
  requirements,
  title,
  terms_offered,
  children,
}) => {
  return id ? (
    <CourseQuickViewContent
      {...{ id, credits, description, requirements, title, terms_offered }}
    />
  ) : (
    <div>{children}</div>
  )
}

export { CourseQuickViewContent, CourseQuickView }
