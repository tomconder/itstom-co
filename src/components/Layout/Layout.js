import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import {
  Title, Link, Meta,
} from 'react-head'
import { Header } from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'

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

const Layout = ({ children }) => {
  const title = "It's Tom"

  return (
    <div className={styles.base}>
      <GlobalStyle />
      <Meta charSet="utf-8" />
      <Meta
        name="description"
        content="The personal web page of Tom Conder"
      />

      <Meta property="og:description" content="The personal web  page of Tom Conder" />
      <Meta property="og:title" content={title} />
      <Meta property="og:url" content="https://itstom.co/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://itstom.co/icons/icon-192x192.png" />

      <Meta property="twitter:card" content="summary" />
      <Meta property="twitter:description" content="The personal web  page of Tom Conder" />
      <Meta property="twitter:title" content={title} />
      <Meta property="twitter:url" content="https://itstom.co/" />
      <Meta property="twitter:image" content="https://itstom.co/icons/icon-192x192.png" />

      <Title lang="en">{title}</Title>
      <Link rel="canonical" href="https://itstom.co/" />
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
