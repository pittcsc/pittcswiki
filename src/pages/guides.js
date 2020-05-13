import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const GuidesListing = ({ posts }) => {
  return posts.map((post, index) => (
    <div className="p-2 border mb-10">
      <Link to={post.fields.slug} key={`post_${index}`}>
        {post.frontmatter.title}
      </Link>
      <div>{post.excerpt}</div>
    </div>
  ))
}

// TODO DESIGN fix this hr, make consitent titles
const GuidesPage = ({
  data: {
    guides: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Guides" />
    <h1>Guides</h1>
    <p>
      A collection of guides written by Pitt CS members aimed to help! Let us
      know if there is something you are curious about but cannot find!
    </p>
    <GuidesListing posts={nodes} />
    <div>
      <h3>Zero to Offer</h3>
      <p>
        Zero to Offer is Pitt CSC's course dedicated to helping you get an
        offer!&nbsp;
        <Link to="/zero-to-offer/intro">Learn more</Link>
      </p>
    </div>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default GuidesPage

export const pageQuery = graphql`
  query Guides {
    guides: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/guides/g" } } }
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
