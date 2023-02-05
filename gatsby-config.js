require('dotenv').config();
const siteUrl = 'https://emprendeca.com'

module.exports = {
  siteMetadata: {
    title: `Programa Emprende`,
    description: 'Promoviendo el talento local',
    siteUrl: siteUrl
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: 'https://emprendeca.com/sitemap-index.html',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
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