import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'
import styles from './Header.module.scss'
import { GithubIcon, TwitterIcon } from '../Icons'
import Avatar from './Avatar'

const Header = () => (
  <header>
    <Avatar />
    <div className={styles.filler} />
    <nav id="social" aria-label="social" className={styles.social}>
      <OutboundLink
        aria-label="twitter"
        className={styles.link}
        href="https://twitter.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon size={24} />
        <span className={styles.name}>@tomconder</span>
      </OutboundLink>
      <OutboundLink
        aria-label="github"
        className={styles.link}
        href="https://github.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon size={24} />
        <span className={styles.name}>tomconder</span>
      </OutboundLink>
    </nav>
  </header>
)

export default Header
