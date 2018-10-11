import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.note}>
      Built with{' '}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{' '}
      and{' '}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>
      . The source code for this website is available on{' '}
      <a
        href="https://github.com/tomconder/itstom-co"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      .
    </div>
  </footer>
);

export default Footer;
