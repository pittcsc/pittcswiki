const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS =
  process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS ||
  require("./google_api_secret.json")

if (!GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) {
  console.error(
    "No google account credentials set. Please download these or set them as an environment variable"
  )
}

module.exports = {
  siteMetadata: {
    title: `Pitt CS Wiki`,
    description: `Learn everything you want about Computer Science at Pitt`,
    author: `@pittcsc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#1C2957`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
        name: `courses_pages`,
        path: `${__dirname}/src/pages/courses/courses_markdown`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
