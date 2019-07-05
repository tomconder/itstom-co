import React from 'react'
import PropTypes from 'prop-types'
import GitHub from 'react-feather/dist/icons/github'
import styles from '../Header/Header.module.scss'

const GithubIcon = ({ url }) => (
  <a
    aria-label="github"
    className={styles.link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <GitHub size={24} />
    <span className={styles.name}>tomconder</span>
  </a>
)

GithubIcon.propTypes = {
  url: PropTypes.string,
}

GithubIcon.defaultProps = {
  url: '',
}

export default GithubIcon
