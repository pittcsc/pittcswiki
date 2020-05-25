import React from "react"
import { cleanCourseId } from "../../utils/course-namer"

const CSLegendData = {
  CS0447: "#f44336", // red
  CS0441: "#fdd835", // yellow
  CS1502: "#ff9800", // dark yellow
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
  const prereq = requirements.prereq
  if (!prereq) return null

  if (prereq.or) {
    return <OrRequirementDots req={requirementsToColor(prereq.or, legend)} />
  } else if (prereq.length > 0 || prereq.and) {
    const reqs = prereq.and ? prereq.and : prereq
    return <ListRequirementDots req={requirementsToColor(reqs, legend)} />
  }
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

export { PrereqLegend, CSLegendData, RequirementDots }
