import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"

export const PageHit = (clickHandler) => ({ hit }) => (
  <div>
    <Link to={hit.path} onClick={clickHandler}>
      {hit.id} - <Highlight attribute="title" hit={hit} tagName="mark" />
    </Link>
    {/* <Snippet attribute="excerpt" hit={hit} tagName="mark" /> */}
  </div>
)

// TODO Add searchable sections for other parts of the wiki once they are finished
// export const PostHit = (clickHandler) => ({ hit }) => (
//   <div>
//     <Link to={hit.slug} onClick={clickHandler}>
//       <h4>
//         <Highlight attribute="title" hit={hit} tagName="mark" />
//       </h4>
//     </Link>
//     <div>
//       &nbsp;
//       <Highlight attribute="date" hit={hit} tagName="mark" />
//       &emsp; &nbsp;
//       {hit.tags.map((tag, index) => (
//         <Fragment key={tag}>
//           {index > 0 && `, `}
//           {tag}
//         </Fragment>
//       ))}
//     </div>
//     <Snippet attribute="excerpt" hit={hit} tagName="mark" />
//   </div>
// )
