import React from "react"
import BlogPostLayout from "./blog-post-layout"
import CourseGraph from "../course-graph"
import { MDXProvider } from "@mdx-js/react"

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

export default function Template({
  path,
  children,
  pageContext: {
    frontmatter: { title, subtitle, redirect_from },
  },
}) {
  return (
    <BlogPostLayout
      {...{
        title,
        subtitle,
        redirect_from,
        slug: path,
        fileType: ".mdx",
      }}
    >
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </BlogPostLayout>
  )
}
