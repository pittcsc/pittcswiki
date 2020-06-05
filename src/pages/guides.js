import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
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
        <div className="border bg-gray-200 shadow-sm h-64 p-4">
          <h1>{post.frontmatter.title}</h1>
          <div>{post.excerpt}</div>
        </div>
      </Link>
    ))

  return <div className="flex flex-wrap -mx-4 -mt-4">{guides}</div>
}

// TODO DESIGN fix this hr, make consitent titles
const GuidesPage = ({ data: { guides } }) => (
  <Layout>
    <SEO title="Guides" />
    <Breadcrumb slug="/guides/" />
    <h1>Guides</h1>
    <p>
      A collection of guides written by Pitt CS members aimed to help! Let us
      know if there is something you are curious about but cannot find! TODO -
      this page needs to be updated
    </p>
    <GuidesListing posts={guides.nodes} />
    <div>
      <h2>Recommended</h2>
      <p>todo</p>
    </div>
    <div>
      <h2>Recently Updated</h2>
      <p>todo</p>
    </div>
  </Layout>
)

export default GuidesPage

export const pageQuery = graphql`
  query Guides {
    guides: allMarkdownRemark(
      filter: {
        fields: { slug: { glob: "/guides/*/" }, isIndexPage: { eq: true } }
        internal: {}
      }
    ) {
      nodes {
        frontmatter {
          title
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
