const replaceTemplate = require("../helpers/mini_handlebars")

test("doesnt mess up normal string", () => {
  const val = replaceTemplate("name", { name: "Mat" })
  expect(val).toBe("name")
})

test("replaces just string", () => {
  const val = replaceTemplate("{{ name }}", { name: "Mat" })
  expect(val).toBe("Mat")
})

test("replaces with handlebars in middle", () => {
  const val = replaceTemplate("hello {{ name }}, \n nice to meet you", {
    name: "Ming",
  })
  expect(val).toBe("hello Ming, \n nice to meet you")
})

test("replaces multiple handlebars", () => {
  const template = `
	Hello mister {{ name }},
	I love {{ club }}. The best college is
	{{ college }}. I love the {{ nfl_team }}.
	`
  const expected = `
	Hello mister Ming,
	I love PittCSC. The best college is
	Pitt (#h2p). I love the Eagles.
	`
  const val = replaceTemplate(template, {
    name: "Ming",
    club: "PittCSC",
    college: "Pitt (#h2p)",
    nfl_team: "Eagles",
  })
  expect(val).toBe(expected)
})
