require("dotenv").config()

const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS =
  process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS ||
  require("./google_api_secret.json")

if (!GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) {
  console.error(
    "No google account credentials set. Please download these or set them as an environment variable"
  )
}

const isIndexingAlgolia =
  process.env.CONTEXT == "production" || process.env.INDEX_ALGOLIA

if (isIndexingAlgolia) {
  console.log("Indexing on Algolia!")
}

module.exports = {
  siteMetadata: {
    title: `Pitt CS Wiki`,
    description: `Learn everything you want about Computer Science at Pitt`,
    author: `pittcsc@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135921618-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config.js")),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pitt CS Wiki`,
        short_name: `CS Wiki`,
        start_url: `/`,
        background_color: `#003594`,
        theme_color: `#FFB81C`,
        display: `minimal-ui`,
        icon: `src/images/pantherhandbook-mini.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1JsJKialTXTAEPljU9GDAJnxvsJUL3rKdNNBRvLzXcEk",
        typePrefix: "GoogleSheet",
        credentials:
          typeof GOOGLE_SERVICE_ACCOUNT_CREDENTIALS === "string"
            ? JSON.parse(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS)
            : GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
        filterNode: () => true,
        mapNode: (node) => node,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guides`,
        path: `${__dirname}/src/guides/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/guides`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(
            `${__dirname}/src/components/templates/mdx-guide-template.js`
          ),
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `0`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              elements: ["h2", "h3", "h4"],
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-redirect-from",
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-catch-links",
  ].concat(
    isIndexingAlgolia
      ? [
          {
            resolve: `gatsby-plugin-algolia`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              queries: require("./src/utils/algolia"),
              chunkSize: 1000,
            },
          },
        ]
      : []
  ),
}
