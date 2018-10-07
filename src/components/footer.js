import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
  <footer>
    <div className={styles.footer}>
      Built with  with
      {' '}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
      {' '}
      and
      {' '}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>
. The code for this website is open source and available on
      {' '}
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
