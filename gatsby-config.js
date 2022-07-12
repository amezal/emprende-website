require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Proyecto Emprende`,
    siteUrl: `https://www.emprendeca.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": process.env.WP_GRAPHQL_URL
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};