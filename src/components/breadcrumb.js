import React from "react"
import { Link } from "gatsby"
import { breakdownSlugIntoUrls } from "../utils/slug-utils"

const arrowSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className="inline mx-1"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
  </svg>
)

/* This component is kind of confusing to use lol, but it works! */
export default ({ slug, firstBreadCrumb = { link: "/", text: "HOME" } }) => {
  if (!slug) return

  const parts = slug.split("/").filter((x) => x)

  const urls = breakdownSlugIntoUrls(slug)

  const displayNames = parts.map((part) => part.replace(/-/g, " "))

  const breadcrumbs = urls.map((url, i) => {
    return i < urls.length - 1 ? (
      <span key={`breadcrumb_${url}`}>
        <Link className="uppercase" to={url}>
          {displayNames[i]}
        </Link>
        {i < urls.length - 1 && arrowSvg}
      </span>
    ) : (
      <span className="uppercase" key={`breadcrumb_${url}`}>
        {displayNames[i]}
      </span>
    )
  })

  return (
    <div className="breadcrumbs flex md:flex-row flex-col md:items-center mb-3">
      <span>
        <Link to={firstBreadCrumb.link}>{firstBreadCrumb.text}</Link>
        {arrowSvg}
      </span>
      {breadcrumbs}
    </div>
  )
}
