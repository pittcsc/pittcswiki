import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DagreGraph from "dagre-d3-react"
import { useStaticQuery, graphql } from "gatsby"
import { siteGraphGenerator } from "../utils/sitegraph-generator"

const CoursesPage = () => {
  const { sites, pages } = useStaticQuery(graphql`
    {
      sites: allSitePage {
        nodes {
          path
        }
      }
      pages: allMarkdownRemark {
        nodes {
          id
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)
  const graphData = siteGraphGenerator(
    sites.nodes.map((n) => n.path),
    pages.nodes
  )
  return (
    <Layout>
      <SEO title="Sitemap" />
      <h1>Site Map</h1>
      <DagreGraph nodes={graphData.nodes} links={graphData.links} />
    </Layout>
  )
}

export default CoursesPage
