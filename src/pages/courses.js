import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Courses" />
    <h1>Courses</h1>
    <p>What classes should you take?</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage
