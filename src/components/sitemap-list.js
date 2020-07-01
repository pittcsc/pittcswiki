import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { siteGraphGenerator } from "../utils/sitegraph-generator"

const TreeView = ({ tree }) => {
  return (
    <ol className="list-disc mb-0">
      {tree.slug && (
        <li>
          <a href={tree.slug}>{tree.title}</a>
        </li>
      )}
      {tree.children &&
        tree.slug !== "/courses/" &&
        tree.children.map((child) => <TreeView key={child.id} tree={child} />)}
    </ol>
  )
}

export default function SitemapList() {
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
        {
          slug: "/courses/",
          nugget: "wisdom",
          title: "Course Explorer and Testimonials",
        },
      ])
  )
  return <TreeView tree={tree} />
}
