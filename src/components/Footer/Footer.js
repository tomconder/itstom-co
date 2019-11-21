import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer>
    <div className={styles.note}>
      Built with
      {' '}
      <OutboundLink
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </OutboundLink>
      {' '}
      and
      {' '}
      <OutboundLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </OutboundLink>
      . The source code for this website is available on
      {' '}
      <OutboundLink
        href="https://github.com/tomconder/itstom-co"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </OutboundLink>
      .
    </div>
  </footer>
)

export default Footer
