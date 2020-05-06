// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const pageQuery = `{
	pages: allMarkdownRemark {
	  nodes {
		frontmatter {
		  id
		  path
		  title
		}
		rawMarkdownBody
	  }
	}
  }`

const flatten = (arr) =>
  arr.map(({ frontmatter, ...rest }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.nodes),
    indexName: `Pages`,
    settings,
  },
]

module.exports = queries
