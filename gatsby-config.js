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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/src/images/`,
        name: 'images',
      },
    },
    'gatsby-plugin-react-helmet-async',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-sitemap',
  ],
}
