import React from 'react';

const Footer = () => (
  <footer style={{
    padding: '20px',
    flexDirection: 'row',
  }}
  >
    <div
      className="footer"
      color="accent"
      style={{
        padding: '0 0 .5em',
        textAlign: 'center',
      }}
    >
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
        href="https://github.com/tomconder"
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
