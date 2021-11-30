module.exports = {
  siteMetadata: {
    title: `Gatsby Redux Boilerplate`,
    description: `Gatsby boilerplate for me`,
    author: `Igor Korobyev <iKorobyev@gmail.com>`,
    navigation: [
      {
        path: '/',
        label: 'Главная',
        icon: ''
      }
    ]
  },
  flags: {
    FAST_DEV: true
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brightlab Gatsby Boilerplate`,
        short_name: `Boilerplate`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss'
  ]
}
