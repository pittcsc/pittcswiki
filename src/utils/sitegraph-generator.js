const parse = require("parse-markdown-links")

const isExternalLink = (link) =>
  link.toLowerCase().substring(0, 3) === "www" ||
  link.toLowerCase().substring(0, 4) === "http" ||
  link.toLowerCase().substring(0, 4) === "mail"

const parseLink = (link) => {
  // links can be malformed
  if (link[0] !== "/" && !isExternalLink(link)) {
    return { error: "invalid link" }
  }
  // links can have "/index" at the end
  return link.replace(/\/index$/g, "").toLowerCase()
}

/*
Input 
sites: [ slug1, slug2, slug3, ...]
pages: [{ slug: ___, rawMarkdownBody: ___, title: ____ }]
*/
function siteGraphGenerator(sites, pages) {
  const errors = []
  const siteMap = sites.reduce((map, title) => {
    map[title.toLowerCase()] = true
    return map
  }, {})

  const siteNodes = pages.map((node) => {
    return {
      slug: node.slug,
      links: parse(node.rawMarkdownBody),
      title: node.title,
    }
  })

  const nodes = [{ id: "$EXTERNAL" }]
  const links = []

  siteNodes.forEach((node) => {
    node.links.forEach((link) => {
      const parsedLink = parseLink(link)
      if (parsedLink.error) {
        errors.push({ file: node.slug, brokenLink: link })
      } else {
        const external = isExternalLink(parsedLink)
        if (!external && !siteMap[parsedLink]) {
          errors.push({ file: node.slug, brokenLink: link })
        }

        links.push({
          source: node.slug,
          target: external ? "$EXTERNAL" : parsedLink,
        })
      }
    })
  })

  return {
    nodes,
    links,
    errors,
  }
}

module.exports = {
  siteGraphGenerator,
}
