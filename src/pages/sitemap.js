import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SitemapList from "../components/sitemap-list"
import { Link } from "gatsby"

const SitemapPage = () => {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <h1>Site Map</h1>
      <p>
        This lists every page on the wiki! If you are feeling overwhelmed, check
        out the <Link to="/guides/">guides listing page</Link>, or try using the
        search in the top right corner.
      </p>
      <SitemapList />
      <div className="mb-10"></div>
    </Layout>
  )
}

export default SitemapPage
