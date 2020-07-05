const { siteGraphGenerator } = require("../src/utils/sitegraph-generator")
const readMarkdown = require("../helpers/read-markdown")

test("No broken links or missing index files", async () => {
  const data = await readMarkdown()
  // hard code the non markdown routes
  const sites = data
    .map((node) => node.slug)
    .concat(["/courses/", "/about/", "/guides/", "/sitemap/"])

  const { errors } = siteGraphGenerator(sites, data)
  if (errors.length > 0) {
    console.log("Broken Links:")
    console.log(
      "Make sure they start with www or http or have a slug in the wiki. Or maybe there is a bug in the test!"
    )
    console.warn(errors)
  }
  expect(errors.length).toEqual(0)
})
