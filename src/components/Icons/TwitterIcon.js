import React from 'react'
import * as PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { Twitter } from 'react-feather'
import styles from '../Header/Header.module.scss'

const TwitterIcon = ({ url }) => (
  <OutboundLink
    aria-label="twitter"
    className={styles.link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Twitter size={24} />
    <span className={styles.name}>@tomconder</span>
  </OutboundLink>
)

TwitterIcon.propTypes = {
  url: PropTypes.string,
}

TwitterIcon.defaultProps = {
  url: '',
}

export default TwitterIcon
