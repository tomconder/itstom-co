import React from 'react'
import Link from 'gatsby-link'
import styles from './Avatar.module.scss'
import { ItsTomMugIcon } from '../Icons'

const Avatar = () => (
  <div className={styles.title}>
    <Link to="/">
      <ItsTomMugIcon size={42} fill="white" aria-label="It's Tom" />
    </Link>
  </div>
)

export default Avatar
