import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import CourseGraph from "../course-graph"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={"Guide"} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="frontmatter">
            <h1 className="title">{frontmatter.title}</h1>
            {frontmatter.subtitle && (
              <h2 className="sub-title">{frontmatter.subtitle}</h2>
            )}
            <i className="date">This page was last updated on todo issue #64</i>
          </div>
          <div
            className="mt-4 blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
