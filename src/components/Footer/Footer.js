import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={styles.note}>
        Built with
        {' '}
        <Link
          to="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </Link>
        {' '}
        and
        {' '}
        <Link to="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </Link>
        . The source code for this website is available on
        {' '}
        <Link
          to="https://github.com/tomconder/itstom-co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        .
      </div>
    </footer>
  )
}

export default Footer
