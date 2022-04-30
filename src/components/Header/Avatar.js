import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Avatar.module.scss'
import { ItsTomMugIcon } from '../Icons'

function Avatar() {
  return (
    <div className={styles.title}>
      <Link to="/">
        <ItsTomMugIcon size={42} fill="white" aria-label="It's Tom" />
      </Link>
    </div>
  )
}

export default Avatar
