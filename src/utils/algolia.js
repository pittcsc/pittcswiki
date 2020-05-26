const { cleanCourseId, getNumFromCourseId } = require("./course-namer")

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

// TODO consider adding more stuff in here to search for.

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
    settings: { hitsPerPage: 10 },
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
    indexName: `Courses`,
    settings: { attributesToSnippet: [`excerpt:20`], hitsPerPage: 6 },
  },
]

module.exports = queries
