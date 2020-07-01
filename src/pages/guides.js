import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import SitemapList from "../components/sitemap-list"
import { Link, graphql } from "gatsby"

const GuidesListing = ({ posts }) => {
  const guides = posts
    .filter((p) => p.excerpt)
    .map((post, index) => (
      <Link
        className="inline-block p-1 w-full text-gray-800 px-4 py-4 md:w-1/2"
        to={post.fields.slug}
        key={`g_${index}`}
      >
        <div className="border bg-gray-200 shadow-sm h-64 p-4 hover:bg-gray-600 hover:text-white hover:shadow-md">
          <h1>{post.frontmatter.title}</h1>
          <div>{post.frontmatter.guides_blurb}</div>
        </div>
      </Link>
    ))

  return <div className="flex flex-wrap -mx-4 -mt-4">{guides}</div>
}

// TODO - recommended and recently updated
const GuidesPage = ({ data: { guides } }) => (
  <Layout>
    <SEO title="Guides" />
    <Breadcrumb slug="/guides/" />
    <h1>Guides</h1>
    <p>
      These are collections of guides organized by topic. You can also use the
      search bar at the top right to search for classes and more!
    </p>
    <GuidesListing posts={guides.nodes} />
    <div>
      <h2>Popular</h2>
      <ul>
        <li>
          <Link to={"/academics/scheduling"}>Scheduling</Link>
        </li>
        <li>
          <Link to={"/courses"}>Course Explorer</Link>
        </li>
        <li>
          <Link to={"/zero-to-offer"}>Zero to Offer</Link>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2>Full Guide Listing</h2>
      <SitemapList />
    </div>
    <p>
      Still curious about something but cannot find it? Please let us know and
      we can add it!{" "}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfijKV1sHF7QGWYc6UzIbUuIIntDOPbyqdrzXg-snHeBN_qNg/viewform">
        Fill out this form.
      </a>
    </p>
  </Layout>
)

export default GuidesPage

// This query gets all the index pages in the "first" folder
export const pageQuery = graphql`
  query Guides {
    guides: allMarkdownRemark(
      filter: {
        fields: { slug: { glob: "/*/" }, isIndexPage: { eq: true } }
        frontmatter: { guides_blurb: { ne: null } }
      }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      nodes {
        frontmatter {
          title
          guides_blurb
        }
        fields {
          slug
        }
        wordCount {
          words
        }
        excerpt(pruneLength: 250)
      }
    }
  }
`
