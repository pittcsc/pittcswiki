import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { siteGraphGenerator } from "../utils/sitegraph-generator"

const TreeView = ({ tree }) => {
  return (
    <ol className="list-disc mb-0">
      {" "}
      {tree.slug && (
        <li>
          <a href={tree.slug}>
            {tree.title === "Courses" ? "Courses Exploration" : tree.title}
          </a>
        </li>
      )}
      {tree.children &&
        tree.title !== "Courses" &&
        tree.children.map((child) => <TreeView key={child.id} tree={child} />)}
    </ol>
  )
}

const SitemapTree = ({ tree }) => {
  return <TreeView tree={tree} />
}

const SitemapPage = () => {
  const { sites, mdx, pages } = useStaticQuery(graphql`
    {
      sites: allSitePage {
        nodes {
          path
        }
      }
      mdx: allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      pages: allMarkdownRemark {
        nodes {
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
  const { tree } = siteGraphGenerator(
    sites.nodes.map((n) => n.path),
    pages.nodes
      .concat(mdx.nodes)
      .map((n) => ({
        slug: n.fields.slug,
        rawMarkdownBody: n.rawMarkdownBody,
        title: n.frontmatter.title,
      }))
      .concat([
        {
          slug: "/about/",
          title: "About",
        },
        {
          slug: "/guides/",
          title: "Guides",
        },
      ])
  )

  return (
    <Layout>
      <SEO title="Sitemap" />
      <h1>Site Map</h1>
      <p>
        This lists every page on the wiki! If you are feeling overwhelmed, check
        out the <Link to="/guides/">guides</Link> or try out the search!
      </p>
      <SitemapTree tree={tree} />
      <div className="mb-10"></div>
    </Layout>
  )
}

export default SitemapPage
