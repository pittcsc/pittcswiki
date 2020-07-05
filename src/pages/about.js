import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Breadcrumb from "../components/breadcrumb"

export default () => (
  <Layout readingMode>
    <SEO title="About" />
    <Breadcrumb slug="/about/" />
    <div>
      <h1>About the Wiki</h1>
      <div>
        <p>
          Information is power. We want to ensure that everyone has equal access
          to quality information they need to succeed. During our time at Pitt,
          we noticed most wisdom was just spread across individuals talking to
          other individuals.
        </p>
        <p>
          If you did not happen to know the right people, you would be at a
          disadvantage. As students progress through college, everyone gains
          tidbits of knowledge that could be useful to future generations and
          have no good place to share it. We started compiling information into
          this Wiki to try to fix that. Each successive group of students should
          be better equipped than the last.
        </p>
        <p>
          If you have feedback or questions, let us know by{" "}
          <Link to="/feedback">filling out this form!</Link> If you are
          interested in the technical details of the wiki, everything is open
          source and documented on{" "}
          <a href="https://github.com/PittCSWiki/pittcswiki">
            the GitHub repo!
          </a>
        </p>

        <p>Hope its helpful.</p>
        <i>The 2019 Pitt CSC Officers</i>
      </div>
    </div>
  </Layout>
)
