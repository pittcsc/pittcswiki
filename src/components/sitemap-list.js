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

const CardView = ({ tree }) => {
  return (
    <>
      {tree.slug && (
        <a
          href={tree.slug}
          className="w-full h-32 md:h-48 p-4 border text-gray-800 bg-gray-200 shadow-sm transition hover:bg-gray-600 hover:font-bold hover:shadow-md"
        >
          {tree.title}
        </a>
      )}
      {tree.children &&
        tree.slug !== "/courses/" &&
        tree.children.sort(sortAlphaByTitle).map((child) => (
          <a
            key={child.id}
            href={child.slug}
            className="w-full h-32 md:h-48 p-4 border text-gray-800 bg-gray-200 shadow-sm transition hover:text-white hover:font-bold hover:bg-gray-600 hover:shadow-md"
          >
            {child.title}
          </a>
        ))}
    </>
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
    if (!currentBranch.children) break
    currentBranch = currentBranch.children.filter(
      (child) => child.slug === currentUrl
    )[0]
    depth++
  }

  return { children: currentBranch.children }
}

let cachedTree = null

export default function SitemapList({ filterSlug, type }) {
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

  return type === "card" ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <CardView tree={filteredTree} />
    </div>
  ) : (
    <TreeView tree={filteredTree} />
  )
}
