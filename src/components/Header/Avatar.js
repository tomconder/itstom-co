import React from 'react'
import Link from 'gatsby-link'
import styles from './Avatar.module.scss'
import { ItsTomIcon, MugIcon } from '../Icons'

const Avatar = () => (
  <div className={styles.title}>
    <Link to="/">
      <MugIcon size={30} aria-label="Mug" />
      <ItsTomIcon size={32} aria-label="It's Tom" />
    </Link>
  </div>
)

export default Avatar
