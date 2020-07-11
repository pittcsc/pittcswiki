import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { siteGraphGenerator } from "../utils/sitegraph-generator"

const sortAlphaByTitle = (a, b) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

const TreeView = ({ tree }) => {
  console.log(tree.children)
  return (
    <ol className="list-disc mb-0">
      {tree.slug && (
        <li>
          <a href={tree.slug}>{tree.title}</a>
        </li>
      )}
      {tree.children &&
        tree.slug !== "/courses/" &&
        tree.children
          .sort(sortAlphaByTitle)
          .map((child) => <TreeView key={child.id} tree={child} />)}
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
          title: "Course Explorer and Testimonials",
        },
        {
          slug: "/feedback/",
          title: "Feedback",
        },
      ])
  )
  return <TreeView tree={tree} />
}
