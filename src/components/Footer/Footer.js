import React from 'react'
import { note } from './Footer.module.scss'

const Footer = () => (
  <footer>
    <div className={note}>
      Built with
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
      . The source code for this website is available on
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
)

export default Footer
