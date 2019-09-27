import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const SPREADSHEET_QUERY = graphql`
// query {
// 	allGoogleSheet_course_testimonials {
// 		edges {
// 			node {
// 				name
// 				prof
// 				term_szn
// 				year
// 				description
// 				difficulty
// 				workload
// 				workload_description
// 				recommend
// 				other_notes
// 			}
// 		}
// 	}
// }
// `

const CourseListing = () => (
	<p>sf</p>
	// <StaticQuery
	// 	query={SPREADSHEET_QUERY}
	// 	render={data => (
	// 		<pre>data</pre>
	// 	)}
	// />
)

const CoursesPage = () => (
  <Layout>
    <SEO title="Courses" />
    <h1>Courses</h1>
    <p>What classes should you take?</p>
	<CourseListing />
    <Link to="/">Homepage</Link>
  </Layout>
)

export default CoursesPage
