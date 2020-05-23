import React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "./blog-post-layout"

// This template is used for regular plain Markdown files. Look at mdx-guide-template
// guides that use MDX!

export default function Template({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below.
}) {
  const {
    frontmatter: { title, subtitle, is_index_page },
    html,
    fields: { gitAuthorTime, slug },
  } = markdownRemark
  console.log(title, is_index_page)
  return (
    <BlogPostLayout
      {...{
        title,
        subtitle,
        is_index_page,
        gitAuthorTime,
        slug,
        fileType: ".md",
      }}
    >
      <div
        className="mt-4 blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlogPostLayout>
  )
}

// TODO is_index_page is ugly way to do this. Related to #82

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        is_index_page
      }
      fields {
        slug
        gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`
