import React from 'react'
import styles from './Avatar.module.scss'
import ItsTomIcon from '../Icons/ItsTomIcon'

const Avatar = () => (
  <div className={styles.title}>
    <ItsTomIcon size={32} aria-label="It's Tom" />
  </div>
)

export default Avatar
