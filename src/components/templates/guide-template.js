import React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "./blog-post-layout"

// This template is used for regular plain Markdown files. Look at mdx-guide-template
// guides that use MDX!

export default function Template({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below.
}) {
  const {
    frontmatter: { title, subtitle },
    html,
    fields: { gitAuthorTime, slug, isIndexPage },
  } = markdownRemark
  return (
    <BlogPostLayout
      {...{
        title,
        subtitle,
        isIndexPage,
        gitAuthorTime,
        slug,
        fileType: ".md",
      }}
    >
      {isIndexPage}
      <div
        className="mt-4 blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlogPostLayout>
  )
}

// TODO I do not like how we have 'is index page'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
      }
      fields {
        slug
        isIndexPage
        gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`
