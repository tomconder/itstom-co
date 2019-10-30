import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import {
  HeadProvider, Title, Link, Meta,
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
      <HeadProvider>
        <Meta charSet="utf-8" />
        <Meta
          name="description"
          content="The personal web page of Tom Conder"
        />
        <Title lang="en">{title}</Title>
        <Link rel="canonical" href="https://itstom.co/" />
      </HeadProvider>
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
