import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import Breadcrumb from "../breadcrumb"

export default function BlogPostLayout({
  title,
  subtitle,
  is_index_page,
  gitAuthorTime,
  slug,
  fileType,
  children,
}) {
  return (
    <Layout>
      <SEO title={title} />
      <Breadcrumb slug={slug} />
      <div className="blog-post-container">
        <div className="blog-post mb-8">
          <div className="frontmatter">
            <h1 className="title">{title}</h1>
            {subtitle && <h2 className="sub-title">{subtitle}</h2>}
          </div>
          {children}
          <div className="flex justify-between text-sm text-gray-600">
            <EditOnGithub
              fileType={fileType}
              slug={slug}
              isIndexPage={!!is_index_page}
            />
            {gitAuthorTime && !gitAuthorTime.includes("Invalid") && (
              <div className="text-right">Last updated: {gitAuthorTime}</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const GITHUB_BASE_URL = `https://github.com/PittCSWiki/pittcswiki.github.io/tree/master/src/pages/`

const EditOnGithub = ({ fileType, slug, isIndexPage }) => {
  const parts = slug.split("/").filter((s) => s)
  let githubFileLink = parts.join("/")
  console.log(slug)
  console.log(isIndexPage)
  if (isIndexPage) {
    githubFileLink += "/index"
  }

  const gitHubLink = `${GITHUB_BASE_URL}${githubFileLink}${fileType}`

  return (
    <a
      target="_blank"
      className="text-gray-600"
      rel="noopener noreferrer"
      href={gitHubLink}
    >
      {EditIcon} Edit this page on GitHub
    </a>
  )
}

const EditIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    className="inline -mt-1"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
  </svg>
)
