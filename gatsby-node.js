/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const coursesPageTemplate = path.resolve(
    `src/components/templates/courses-template.js`
  )

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___path] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              id
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: coursesPageTemplate,
        context: {
          courseId: node.frontmatter.id,
        },
      })
    })
  })
}
