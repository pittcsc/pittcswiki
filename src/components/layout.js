/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/_vars.scss"
import "../styles/tailwind.scss"
import "../styles/layout.scss"
import "../styles/components.scss"

const Layout = ({ children, readingMode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className={"container px-2 mx-auto " + (readingMode && " max-w-2xl")}
      >
        <p className="mt-0 p-2 text-center text-orange-600 bg-orange-200">
          The Wiki is Under Construction -{" "}
          <a href="https://github.com/PittCSWiki/pittcswiki.github.io/issues">
            Add issues or suggestions here{" "}
            <span role="img" aria-label="happy">
              😃
            </span>
          </a>
        </p>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
