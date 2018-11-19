import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import { Header } from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`

const Layout = ({ children }) => {
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
        <html lang="en" />
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
