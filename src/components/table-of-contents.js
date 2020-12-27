import React, { useEffect, useState } from "react"
import Slugger from "github-slugger"
import { throttle } from "underscore" 

const slugger = new Slugger()

const truncate = (word) => {
  if (word.length > 28) return word.substring(0, 18) + "..."
  return word
}

export default function TableOfContents({ headings }) {
  const [activeHeading, updateActiveHeading] =
      useState(headings.length > 0 ? headings[0] : null);

  const checkForNewActiveHeading = throttle((e) => {
    if (headings.length <= 1) {
      return;
    }

    let newActiveHeading = headings[0];
    for (let i = 1; i < headings.length; i++) {
      const headingElement = document.getElementById(headings[i].id);
      if (headingElement) {
        // Plus 10 to avoid roundoff error when clicking TOC links.
        if (headingElement.offsetTop <= window.scrollY + 10) {
          newActiveHeading = headings[i];
        } else {
          break;
        }
      }
    }

    if (newActiveHeading.id !== activeHeading.id) {
      updateActiveHeading(newActiveHeading);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', checkForNewActiveHeading);
    return () => window.removeEventListener('scroll', checkForNewActiveHeading);
  });

  if (!headings || headings.length < 4) return null

  slugger.reset()
  return (
    <ul className="hidden lg:block fixed lg:left-0 list-none ml-0 markdown-toc">
      {headings
        .filter((heading) => heading.depth !== 1)
        .map((heading) => (
          <li
            key={heading.value}
            className={
              heading.id === activeHeading.id ?
                  "font-bold toc-heading-depth-" + heading.depth :
                  "toc-heading-depth-" + heading.depth}
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
