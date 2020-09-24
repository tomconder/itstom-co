import React from 'react'
import { Link } from 'gatsby'
import styles from './Avatar.module.scss'
import { ItsTomMugIcon } from '../Icons'

const Avatar = () => (
  <nav id="avatar" aria-label="avatar" className={styles.title}>
    <Link to="/">
      <ItsTomMugIcon size={42} fill="white" aria-label="It's Tom" />
    </Link>
  </nav>
)

export default Avatar
