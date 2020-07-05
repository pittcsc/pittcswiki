import React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "./blog-post-layout"
import TableOfContents from "../table-of-contents"

// This template is used for regular plain Markdown files. Look at mdx-guide-template
// guides that use MDX!

export default function Template({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below.
}) {
  const {
    frontmatter,
    html,
    headings,
    fields: { gitAuthorTime, lastUpdatedString, slug, isIndexPage },
  } = markdownRemark
  return (
    <BlogPostLayout
      {...{
        frontmatter,
        isIndexPage,
        gitAuthorTime,
        lastUpdatedString,
        slug,
        fileType: ".md",
      }}
    >
      <TableOfContents headings={headings} />
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
        author
        related
      }
      headings {
        depth
        value
      }
      fields {
        slug
        isIndexPage
        gitAuthorTime
        lastUpdatedString: gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`
