import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import { Link, graphql } from "gatsby"

const GuidesListing = ({ posts }) => {
  return posts
    .filter((p) => p.excerpt)
    .map((post, index) => (
      <div className="p-2 border mb-10" key={`post_${index}`}>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        <div>{post.excerpt}</div>
      </div>
    ))
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
    <GuidesListing posts={guides.nodes.concat(interactiveGuides.nodes)} />
    <div>
      <h3>Zero to Offer</h3>
      <p>
        Zero to Offer is Pitt CSC's course dedicated to helping you get an
        offer!&nbsp;
        <Link to="/zero-to-offer/intro">Learn more</Link>
      </p>
    </div>
  </Layout>
)

export default GuidesPage

export const pageQuery = graphql`
  query Guides {
    guides: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/guides/" } } }
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
    interactiveGuides: allMdx(
      filter: { fields: { slug: { regex: "/guides/" } } }
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
