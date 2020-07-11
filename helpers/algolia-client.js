const algoliasearch = require("algoliasearch")
require("dotenv").config()

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)

client
  .getLogs({
    offset: 2, // where to start from, default to 0
    length: 100, // how many lines you want, default to 10
    type: "error", // which logs you want, default to no value (all)
  })
  .then(({ logs }) => {
    console.log(logs)
  })
