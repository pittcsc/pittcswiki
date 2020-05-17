import DagreGraph from "dagre-d3-react"
import React from "react"
import { navigate } from "gatsby"
import { toProperCourseId } from "../utils/course-namer"

/*
Usage <CourseGraph reqs={ 
	[
		["CMP401", "CS445"],
		["CS445", "CS447"],
		["CS447", "CS449", { type: 'coreq' }],
		["CS449", "CS1501"]
	]
 }
*/

const addNode = (id, nodeHash, nodes) => {
  if (!nodeHash[id]) {
    nodeHash[id] = true
    nodes.push({
      label: id,
      id: id,
      class: "course cursor-pointer",
      config: {
        width: 50,
      },
    })
  }
}

export default ({ reqs }) => {
  const nodes = []
  const nodeHash = {}
  const links = []
  reqs.forEach((req) => {
    const link = {
      source: req[0],
      target: req[1],
      class: req[2] ? req[2].type : "prereq",
    }
    addNode(link.source, nodeHash, nodes)	
    addNode(link.target, nodeHash, nodes)
    links.push(link)
  })
  
  return (
    <DagreGraph
      nodes={nodes}
      links={links}
      options={{
        rankdir: "LR",
        align: "UL",
        ranker: "tight-tree",
      }}
      height="500"
      width="500"
      shape="rect"
      className="course-graph mx-auto"
      onNodeClick={({ original: { id } }) => {
        navigate(`/courses/${toProperCourseId(id)}`)
      }}
    />
  )
}
