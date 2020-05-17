import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import CourseGraph from "../course-graph"
import { MDXProvider } from "@mdx-js/react"
import Breadcrumb from "../breadcrumb"

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
  pageContext: { frontmatter },
}) {
  return (
    <MDXProvider components={shortcodes}>
      <Layout>
        <SEO title={frontmatter.title} />
        <Breadcrumb slug={path} />
        <div className="blog-post-container">
          <div className="blog-post">
            <div className="frontmatter">
              <h1 className="title">{frontmatter.title}</h1>
              {frontmatter.subtitle && (
                <h2 className="sub-title">{frontmatter.subtitle}</h2>
              )}
            </div>
            {children}
          </div>
        </div>
      </Layout>
    </MDXProvider>
  )
}
