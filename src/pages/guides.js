import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import { Link, graphql } from "gatsby"

const GuidesListing = ({ posts }) => {
  const guides = posts
    .filter((p) => p.excerpt)
    .map((post, index) => (
      <Link to={post.fields.slug} key={`g_${index}`}>
        <div className="p-4 w-1/2 flex-1 h-40 inline-block border mb-10">
          <h1>{post.frontmatter.title}</h1>
          <div>{post.excerpt}</div>
        </div>
      </Link>
    ))

  return <div className="">{guides}</div>
}

// TODO DESIGN fix this hr, make consitent titles
const GuidesPage = ({ data: { guides, interactiveGuides } }) => (
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
      <h3>Recommended</h3>
      <p>todo</p>
    </div>
    <div>
      <h3>Recently Updated</h3>
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
