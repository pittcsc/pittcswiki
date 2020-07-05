import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FeedbackPage = () => (
  <Layout>
    <SEO title="Feedback + Q&A" />
    <div>
      <iframe
        title="Feedback and Q&A"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfijKV1sHF7QGWYc6UzIbUuIIntDOPbyqdrzXg-snHeBN_qNg/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  </Layout>
)

export default FeedbackPage
