import React from 'react'
import PropTypes from 'prop-types'
import { GitHub } from 'react-feather'
import { Link } from 'gatsby'
import * as styles from '../Header/Header.module.scss'

function GithubIcon({ url }) {
  return (
    <Link
      aria-label="github"
      className={styles.link}
      to={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <GitHub size={24} />
      <span className={styles.name}>tomconder</span>
    </Link>
  )
}

GithubIcon.propTypes = {
  url: PropTypes.string,
}

GithubIcon.defaultProps = {
  url: '',
}

export default GithubIcon
