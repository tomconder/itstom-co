import React from 'react'
import {
  filler,
  link,
  name,
  social,
} from './Header.module.scss'
import { GithubIcon, TwitterIcon } from '../Icons'
import Avatar from './Avatar'

const Header = () => (
  <header>
    <Avatar />
    <div className={filler} />
    <nav id="social" aria-label="social" className={social}>
      <a
        aria-label="twitter"
        className={link}
        href="https://twitter.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterIcon size={24} />
        <span className={name}>@tomconder</span>
      </a>
      <a
        aria-label="github"
        className={link}
        href="https://github.com/tomconder"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon size={24} />
        <span className={name}>tomconder</span>
      </a>
    </nav>
  </header>
)

export default Header
