import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FrontPageLinks = [
  {
    title: "Classes",
    links: [
      {
        name: "Courses",
        link: "courses",
      },
      {
        name: "(In Dev:) Scheduling Classes",
        link: "",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      {
        name: "Resume",
        link: "resume",
      },
    ],
  },
  {
    title: "Career",
    links: [
      {
        name: "(In Dev:) Interview Prep",
        link: "",
      },
      {
        name: "(In Dev:) Getting an Interview",
        link: "",
      },
      {
        name: "(In Dev:) Companies",
        link: "",
      },
    ],
  }
]

const LinkGroup = ({ spacing, header, links }) => (
  <td
    style={{
      verticalAlign: "top",
      width: spacing
    }}
  >
    <div>
      <h3>{header}</h3>
      <ul>
        {links.map((entry) => (
          <li>
            <Link to={entry.href}>{entry.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </td>
)

const LinkPanel = ({ data }) => {
  const width_space = parseInt(100 / data.length) + '%';
  const link_groups = data.map((entry) => (
    <LinkGroup spacing={width_space} header={entry.title} links={entry.links} />
  ))
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <table rules="cols">
        <tr>{link_groups}</tr>
      </table>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      Welcome to the Unoffical Pitt CS Wiki
    </h1>
    <hr />
    <LinkPanel data={FrontPageLinks} />
    <hr />
  </Layout>
)

export default IndexPage
