import DagreGraph from "dagre-d3-react"
import React from "react"
/*
Usage <CourseGraph reqs={ 
	[
		["CMP401", "CS445"],
		["CS445", "CS447"]
		["CS447", "CS449", { type: 'coreq' }]
		["CS449", "CS1501"]
	]
 }
*/

const addNode = (id, nodeHash, nodes) => {
  if (!nodeHash[id]) {
    nodeHash[id] = true
    nodes.push({ label: id, id: id, class: "course" })
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
  console.log(nodes)
  console.log(links)
  return (
    <DagreGraph
      nodes={nodes}
      links={links}
      options={{
        rankdir: "LR",
      }}
      width="500"
      height="500"
      animate={1000}
      shape="rect"
      fitBoundaries
      className="course-graph"
      onNodeClick={(e) => console.log(e)}
      onRelationshipClick={(e) => console.log(e)}
    />
  )
}
