const { siteGraphGenerator } = require("../src/utils/sitegraph-generator")
const readMarkdown = require("../helpers/read-markdown")

test("No broken links", async () => {
  const data = await readMarkdown()
  const sites = data.map((node) => node.slug)
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
