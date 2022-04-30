import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { Header } from '../Header'
import Footer from '../Footer'
import * as styles from './Layout.module.scss'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`

function Layout({ children }) {
  const title = "It's Tom"

  return (
    <div className={styles.base}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The personal web page of Tom Conder"
        />

        <meta property="og:description" content="The personal web  page of Tom Conder" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://itstom.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://itstom.co/icons/icon-192x192.png" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@tomconder" />

        <title lang="en">{title}</title>
        <link rel="canonical" href="https://itstom.co/" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: {},
}

export default Layout
