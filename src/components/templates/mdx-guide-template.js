import React from "react"
import BlogPostLayout from "./blog-post-layout"
import CourseGraph from "../courses/course-graph"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TableOfContents from "../table-of-contents"

/* 
Read more about MDX (Markdown X) here 
https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/ 
I think the gatsby-mdx-plugin is not that well documented. It it awkward to 
use. 

https://github.com/gatsbyjs/gatsby/issues/16224
*/

// Unlike the 'guide template', this does not have access to
// other GraphQL queries. To fix that, we would need to figure out
// how to create MDX pages with the Gatbsy createPage API.

const shortcodes = { CourseGraph }

export default function Template({ data: { mdx } }) {
  const {
    frontmatter,
    body,
    headings,
    fields: { gitAuthorTime, lastUpdatedString, slug },
  } = mdx
  return (
    <BlogPostLayout
      {...{
        frontmatter,
        gitAuthorTime,
        lastUpdatedString,
        slug,
        fileType: ".mdx",
      }}
    >
      <TableOfContents headings={headings} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </BlogPostLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      headings {
        depth
        value
      }
      fields {
        slug
        gitAuthorTime
        lastUpdatedString: gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`
