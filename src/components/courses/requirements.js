import React from "react"
import { cleanCourseId } from "../../utils/course-namer"
import CourseLink from "./course-link"

// Look at the components.scss file for styles relating to this component

const CSLegendData = {
  CS1502: "#f44336", // red
  CS0441: "#E91E63", // pink (light red)
  CS0447: "#ff9800", // dark yellow
  CS0445: "#2196f3", // blue
  CS1501: "#00838f", //dark blue
  CS0449: "#4caf50", // green
  CS1550: "#673ab7", // purple
  OTHER: "#47494c", // gray
  // insert joke about how ming is a cs legend
}

const OrRequirementDots = ({ req }) => {
  const list = req.map((color, i) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="flex-inline flex-col ">{list}</span>
}

const ListRequirementDots = ({ req }) => {
  const list = req.map((color, i) => (
    <span
      style={{ background: color }}
      className="course-req-dot"
      key={i}
    ></span>
  ))
  return <span className="">{list}</span>
}

const requirementsToColor = (reqs, legend) => {
  return reqs.sort().map((id) => legend[id] || legend.OTHER)
}

const requirementsToDotsJsx = (requirements, legend) => {
  if (!requirements) return null

  if (requirements.or) {
    return (
      <OrRequirementDots req={requirementsToColor(requirements.or, legend)} />
    )
  } else if (requirements.length > 0 || requirements.and) {
    const reqs = requirements.and ? requirements.and : requirements
    return <ListRequirementDots req={requirementsToColor(reqs, legend)} />
  }
}

const RequirementDots = ({ requirements, legend }) => {
  if (!requirements) return null
  // This only looks at prereqs, not coreqs for now. Maybe coreqs can be fed in the same way, and be triangles
  // instead of circles or some shit
  // Examples of requirements
  // "prereq": {
  // 	"and": ["CS0441", "CS0445"]
  // }
  // "prereq": {
  // 	"or": ["CS0007", "CS0401"]
  // }
  // "prereq": ["CS0445"]
  return (
    <>
      <span className="reqs-dots prereqs">
        {requirementsToDotsJsx(requirements.prereq, legend)}
      </span>
      <span className="reqs-dots coreqs">
        {requirementsToDotsJsx(requirements.coreq, legend)}
      </span>
    </>
  )
}

const PrereqLegend = ({ legendData }) => {
  const legend = Object.keys(legendData)
    .sort()
    .map((courseId) => {
      return (
        <span key={courseId} className="inline-flex items-center">
          <span className="p-2 mr-2" style={{ color: legendData[courseId] }}>
            {courseId === "OTHER" ? "Other" : cleanCourseId(courseId)}
          </span>
        </span>
      )
    })

  return <div>{legend}</div>
}

const requirementsTraverser = (requirements) => {
  if (!requirements) return null

  if (requirements.comment) {
    return <span>{requirements.comment}</span>
  }

  if (requirements.or) {
    const or = requirements.or.map((id) => <CourseLink key={id} id={id} />)
    return <span>{or}</span>
  } else if (requirements.length > 0 || requirements.and) {
    const andReqs = requirements.and ? requirements.and : requirements
    const and = andReqs.map((id) => <CourseLink key={id} id={id} />)
    return <span>{and}</span>
  } else {
    console.log("Error parsing requirements")
    return <span>Check the SCI Website!</span>
  }
}

const RequirementsListing = ({ requirements }) => {
  if (!requirements) {
    return null
  }

  const { prereq, coreq, requirementsString } = requirements
  if (prereq && prereq[0] === "TODO") {
    return (
      <>
        <span className="font-bold">Requirements</span> {requirementsString}
      </>
    )
  }

  if (!prereq && !coreq) {
    return requirementsString ? (
      <div className="p-4 bg-orange-200 text-orange-800">
        {requirementsString}
      </div>
    ) : null
  }

  const prereqJsx = prereq && (
    <span>
      <span className="font-bold">PRE-REQ: </span>{" "}
      {requirementsTraverser(prereq)}
    </span>
  )

  const coreqJsx = coreq && (
    <span>
      <span className="font-bold">CO-REQ: </span> {requirementsTraverser(coreq)}
    </span>
  )

  return (
    <span className="requirements-listing">
      {prereqJsx} {coreqJsx}
    </span>
  )
}

export { PrereqLegend, CSLegendData, RequirementDots, RequirementsListing }
