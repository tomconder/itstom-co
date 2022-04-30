import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Twitter } from 'react-feather'
import * as styles from '../Header/Header.module.scss'

function TwitterIcon({ url }) {
  return (
    <Link
      aria-label="twitter"
      className={styles.link}
      to={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Twitter size={24} />
      <span className={styles.name}>@tomconder</span>
    </Link>
  )
}

TwitterIcon.propTypes = {
  url: PropTypes.string,
}

TwitterIcon.defaultProps = {
  url: '',
}

export default TwitterIcon
