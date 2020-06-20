const { cleanCourseId, getNumFromCourseId } = require("./course-namer")

// Be careful with this file. You can take down the search feature by messing with this!

// In order to prevent Netlify from constantly building this and using all the Algolia quota,
// we only index when running the gatsby build command with the environment variable CONTEXT = production
// (Netlify sets this on production deploys). For testing, you can also run with the env variable INDEX_ALGOLIA
// set to true.
// INDEX_ALGOLIA=true gatsby build

// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const courseQuery = `query CoursePageQuery {
  pages: allMarkdownRemark(filter: {frontmatter: {type: {eq: "individual-course"}}}) {
    nodes {
      frontmatter {
        id
        path
        title
        search_tags
      }
    }
  }
}
`

const guidesQuery = `{
  pages: allMarkdownRemark(filter: {frontmatter: {type: {ne: "individual-course"}}}) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
        search_tags
      }
    }
  }
  mdxpages: allMdx {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
}`

const addCourseTags = (arr) =>
  arr.map(({ frontmatter, ...rest }) => {
    const id = frontmatter.id
    const cleanId = cleanCourseId(id)
    const courseNumber = getNumFromCourseId(id)
    const searchData = {
      ...frontmatter,
      ...rest,
      cleanId,
      courseNumber,
    }
    return searchData
  })

const queries = [
  {
    query: guidesQuery,
    indexName: "Guides",
    settings: { hitsPerPage: 15 },
    transformer: ({ data }) =>
      data.pages.nodes
        .concat(data.mdxpages.nodes)
        .map(({ id, fields: { slug }, frontmatter }) => ({
          ...frontmatter,
          slug,
          id,
        })),
  },
  {
    query: courseQuery,
    transformer: ({ data }) => addCourseTags(data.pages.nodes),
    indexName: `Guides`,
    settings: { attributesToSnippet: [`excerpt:20`], hitsPerPage: 6 },
  },
]

module.exports = queries
