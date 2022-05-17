/* eslint-disable react/function-component-definition */
import React from 'react'
import * as styles from './Header.module.scss'
import { GithubIcon, TwitterIcon } from '../Icons'
import Avatar from './Avatar'

const Header = () => (
  <header>
    <Avatar />
    <div className={styles.filler} />
    <nav title="header-nav" className={styles.social}>
      <a
        aria-label="twitter"
        className={styles.link}
        href="https://twitter.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon />
        <span className={styles.name}>@tomconder</span>
      </a>
      <a
        aria-label="github"
        className={styles.link}
        href="https://github.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon />
        <span className={styles.name}>tomconder</span>
      </a>
    </nav>
  </header>
)

export default Header
