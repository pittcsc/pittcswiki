import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"

export default (clickHandler) => ({ hit }) => {
  if (hit.courseNumber) {
    return (
      <div>
        <Link className="" to={hit.path} onClick={clickHandler}>
          <p className="mb-0">{hit.cleanId}</p>
          <p className="text-sm mb-0">
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </p>
        </Link>
        {/* <Snippet attribute="excerpt" hit={hit} tagName="mark" /> */}
      </div>
    )
  } else {
    return (
      <div>
        <Link to={hit.slug} onClick={clickHandler}>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Link>
      </div>
    )
  }
}
