import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const GroupLink = ({ name, href }) => (
  <div style={{
    padding: '20px',
    display: 'inline-block',
    marginBottom: '10px'
  }}>
    <Link to={href}>{ name }</Link>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>What can we help with?</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <GroupLink name="Courses" href="courses" />
      <GroupLink name="Resume" />
      <GroupLink name="Getting an Interview" />
      <GroupLink name="Interview Prep" />
      <GroupLink name="Companies" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
