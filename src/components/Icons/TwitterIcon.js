import React from 'react'
import * as PropTypes from 'prop-types'
import Twitter from 'react-feather/dist/icons/twitter'
import styles from '../Header/Header.module.scss'

const TwitterIcon = ({ url }) => (
  <a
    aria-label="twitter"
    className={styles.link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Twitter size={24} />
    <span className={styles.name}>@tomconder</span>
  </a>
)

TwitterIcon.propTypes = {
  url: PropTypes.string,
}

TwitterIcon.defaultProps = {
  url: '',
}

export default TwitterIcon
