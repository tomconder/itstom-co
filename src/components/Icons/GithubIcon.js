import React from 'react'
import PropTypes from 'prop-types'
import { GitHub } from 'react-feather'
import { OutboundLink } from 'gatsby-plugin-gtag'
import styles from '../Header/Header.module.scss'

const GithubIcon = ({ url }) => (
  <OutboundLink
    aria-label="github"
    className={styles.link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <GitHub size={24} />
    <span className={styles.name}>tomconder</span>
  </OutboundLink>
)

GithubIcon.propTypes = {
  url: PropTypes.string,
}

GithubIcon.defaultProps = {
  url: '',
}

export default GithubIcon
