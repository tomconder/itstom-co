import React from 'react'
import styles from './Header.module.scss'
import { GithubIcon, TwitterIcon } from '../Icons'
import Avatar from './Avatar'

const Header = () => (
  <header>
    <Avatar />
    <div className={styles.filler} />
    <div className={styles.social}>
      <TwitterIcon url="https://twitter.com/tomconder" />
      <GithubIcon url="https://github.com/tomconder" />
    </div>
  </header>
)

export default Header
