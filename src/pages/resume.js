import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
	<Layout>
		<SEO title="Resume Tips" />
		<h1>Resume Tips</h1>
		<div>
			<p>How should you format your Resume?
				This slide show has great tips:
				&nbsp;<a href="https://docs.google.com/presentation/d/1X6mD4Ljb4YVYoANyWGSMV8vLJS9JIN_R2e0Enb5dxrE/edit#slide=id.p">Link</a>
			</p>
		</div>
		<h2>Example Resumes</h2>
		<ul>
			<li><a target="_blank" href="http://zacyu.com">Zac Yu</a></li>
			<li>TODO: Add more</li>
		</ul>
		
		<Link to="/">Homepage</Link>
	</Layout>
)

export default ResumePage