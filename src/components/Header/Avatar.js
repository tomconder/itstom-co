import React from 'react'
import { title } from './Avatar.module.scss'
import { ItsTomMugIcon } from '../Icons'

const Avatar = () => (
  <nav id="avatar" aria-label="avatar" className={title}>
    <a href="/">
      <ItsTomMugIcon size={42} fill="white" aria-label="It's Tom" />
    </a>
  </nav>
)

export default Avatar
