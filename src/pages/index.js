import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
      <GroupLink name="Resume" href="resume" />
      <GroupLink name="(In Dev:) Scheduling Classes"/>
      <GroupLink name="(In Dev:) Getting an Interview" />
      <GroupLink name="(In Dev:) Interview Prep" />
      <GroupLink name="(In Dev:) Companies" />
    </div>
  </Layout>
)

export default IndexPage
