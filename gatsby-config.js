require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'It\'s Tom',
    description: 'The personal web page of Tom Conder',
    siteUrl: 'https://itstom.co',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "It's Tom",
        short_name: "It's Tom",
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#99ee99',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-head',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) => allSitePage.edges.map(edge => ({
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'monthly',
          priority: 0.7,
        })),
      },
    },
  ],
}
