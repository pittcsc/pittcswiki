import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout"
import SEO from "../seo"
import Breadcrumb from "../breadcrumb"

// This template is used for regular plain Markdown files. Look at mdx-guide-template
// guides that use MDX!

export default function Template({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below.
}) {
  const {
    frontmatter,
    html,
    fields: { gitAuthorTime, slug },
  } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Breadcrumb slug={slug} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="frontmatter">
            <h1 className="title">{frontmatter.title}</h1>
            {frontmatter.subtitle && (
              <h2 className="sub-title">{frontmatter.subtitle}</h2>
            )}
          </div>
          <div
            className="mt-4 blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {gitAuthorTime && !gitAuthorTime.includes("Invalid") && (
            <div className="date">Last updated: {gitAuthorTime}</div>
          )}
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
      fields {
        slug
        gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`
