import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { siteGraphGenerator } from "../utils/sitegraph-generator"
import { breakdownSlugIntoUrls } from "../utils/slug-utils"

const sortAlphaByTitle = (a, b) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

const TreeView = ({ tree }) => {
  return (
    <ul className="list-disc mb-0">
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
    </ul>
  )
}

// Allow anyone to use the filter the constructed sitemap tree. For example, only show a portion.
function filterSitemapTree(tree, filterSlug) {
  if (!filterSlug) return tree

  const brokendownUrls = breakdownSlugIntoUrls(filterSlug)

  let depth = 0
  let currentBranch = tree
  while (depth < brokendownUrls.length && currentBranch != null) {
    const currentUrl = brokendownUrls[depth]
    console.log("seraching for ", currentUrl)
    if (!currentBranch.children) break
    console.log(currentBranch.children)
    currentBranch = currentBranch.children.filter(
      (child) => child.slug === currentUrl
    )[0]
    depth++
  }

  return { children: currentBranch.children }
}

let cachedTree = null

export default function SitemapList({ filterSlug }) {
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

  if (!cachedTree) {
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
    cachedTree = tree
  }

  // Allow filtering for certain sections of the sitemap
  const filteredTree = filterSitemapTree(cachedTree, filterSlug)

  return <TreeView tree={filteredTree} />
}
