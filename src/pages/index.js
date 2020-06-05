import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.svg"
import "../styles/front-page.sass"

const FrontPageLinks = [
  {
    title: "Classes",
    links: [
      {
        name: "Course Explorer",
        href: "courses",
      },
      {
        name: "Scheduling Classes",
        href: "/guides/scheduling",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      {
        name: "Study Abroad",
        href: "/guides/academics/study-abroad",
      },
      {
        name: "More Guides...",
        href: "/guides",
      },
    ],
  },
  {
    title: "Zero to Offer",
    links: [
      {
        name: "Introduction",
        href: "/guides/zero-to-offer/intro",
      },
      {
        name: "Resume",
        href: "/guides/zero-to-offer/resume",
      },
      {
        name: "Application Process",
        href: "/guides/zero-to-offer/application-process",
      },
    ],
  },
]

const LinkGroup = ({ header, links }) => (
  <div className="flex-1 bg-white m-3 rounded-lg p-6">
    <h3>{header}</h3>
    <ul className="list-outside">
      {links.map((entry) => (
        <li key={entry.href} className="text-indigo-500">
          <Link to={entry.href}>{entry.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const LinkPanel = ({ data }) => {
  const linkGroups = data.map((entry) => (
    <LinkGroup header={entry.title} links={entry.links} />
  ))
  return <div className="flex flex-col md:flex-row border-t">{linkGroups}</div>
}

// TODO - update this page to look less bland.

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro-block">
      <img src={logo} alt="Pitt CS Wiki Logo" />
      <h1>Pitt CS Wiki!</h1>
    </div>

    <LinkPanel data={FrontPageLinks} />
  </Layout>
)

export default IndexPage
