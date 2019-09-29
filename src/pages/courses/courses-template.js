
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allGoogleSheetCourseTestimonials } = data;
  const { frontmatter, html, title } = markdownRemark;
  const modifiedTime = markdownRemark.parent.modifiedTime;
  return (
  <Layout>
    <SEO title={title} />
	<div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <p>Last updated on {modifiedTime}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
		<h1>Testimonials</h1>
		<div>
			<pre>
				{ JSON.stringify(allGoogleSheetCourseTestimonials, false, 4)}
			</pre>
		</div>
		<h1>Resources</h1>
		<pre>Drag to upload stuff here please</pre>
		<Link to="/">(TODO: change this) Homepage</Link>
      </div>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $courseId: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
		title
		id
	  }
	  parent {
		... on File {
			modifiedTime(formatString: "MMMM Do YYYY")
		}
	  }
	}
	allGoogleSheetCourseTestimonials(filter: {courseId: {eq: $courseId}}) {
		edges {
		  node {
			courseId
			description
			difficulty
			name
			prof
			recommend
			termSzn
			workload
			workloadDescription
			year
		  }
		}
	}
}`