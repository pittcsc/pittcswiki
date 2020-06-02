import React from "react"
import Slugger from "github-slugger"

const slugger = new Slugger()

const truncate = (word) => {
  if (word.length > 28) return word.substring(0, 18) + "..."
  return word
}

export default function TableOfContents({ headings }) {
  if (headings.length < 4) return null
  slugger.reset()
  return (
    <ul className="hidden lg:block fixed lg:left-0 list-none ml-0 markdown-toc">
      {headings
        .filter((heading) => heading.depth !== 1)
        .map((heading) => (
          <li
            key={heading.value}
            className={"toc-heading-depth-" + heading.depth}
            style={{ marginLeft: heading.depth + "rem" }}
          >
            <a
              className="text-gray-600"
              href={"#" + slugger.slug(heading.value)}
            >
              {truncate(heading.value)}
            </a>
          </li>
        ))}
    </ul>
  )
}
