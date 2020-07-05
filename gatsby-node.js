/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { execSync } = require("child_process")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (`MarkdownRemark|Mdx`.includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: `guides` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    if (node.fileAbsolutePath && node.fileAbsolutePath.includes("/index.")) {
      createNodeField({
        node,
        name: "isIndexPage",
        value: true,
      })
    }
    // https://angelos.dev/2019/09/add-support-for-modification-times-in-gatsby/
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString()

    createNodeField({
      node,
      name: "gitAuthorTime",
      value: gitAuthorTime,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              id
              type
              title
            }
            fields {
              slug
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter && node.frontmatter.type === "individual-course") {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(
            `src/components/templates/courses-template.js`
          ),
          context: {
            courseId: node.frontmatter.id,
          },
        })
      } else {
        if (!node.frontmatter.title) {
          console.warn(
            node.fields.slug,
            " is missing a title in the frontmatter"
          )
        }
        createPage({
          path: node.fields.slug,
          component: path.resolve("src/components/templates/guide-template.js"),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
