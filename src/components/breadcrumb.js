import React from "react"
import { Link } from "gatsby"

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

export default ({ slug }) => {
  if (!slug) return

  const parts = slug.split("/").filter((x) => x)

  // This turns [guides. minors, stat] into
  // ['/guides/', '/guides/minors/', '/guides/minors/stat']
  const urls = parts.reduce((acc, current, i) => {
    acc[i] = (acc.slice(-1)[0] || "/") + current + "/"
    return acc
  }, [])

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
        <Link to={"/"}>HOME</Link>
        {arrowSvg}
      </span>
      {breadcrumbs}
    </div>
  )
}
