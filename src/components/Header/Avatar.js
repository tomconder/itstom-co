import React from 'react'
import Link from 'gatsby-link'
import styles from './Avatar.module.scss'
import ItsTomIcon from '../Icons/ItsTomIcon'

const Avatar = () => (
  <div className={styles.title}>
    <Link to="/">
      <ItsTomIcon size={32} aria-label="It's Tom" />
    </Link>
  </div>
)

export default Avatar
