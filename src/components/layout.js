/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

injectGlobal`
  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => (
  <div className={styles.base}>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="The personal web page of Tom Conder" />
      <html lang="en" />
      <lang>US-en</lang>
      <title>It's Tom</title>
      <link rel="canonical" href="https://itstom.co/" />
    </Helmet>

    <Header />
    { children }
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: {},
};

export default Layout;
