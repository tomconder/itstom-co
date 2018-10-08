import React from 'react';
import styles from './header.module.scss';
import Twittericon from './twittericon';
import GithubIcon from './githubicon';

const Header = () => (
  <header>
    <div className={styles.title}>
      IT&apos;S TOM
    </div>
    <div className={styles.filler} />
    <div className={styles.social}>
      <Twittericon
        url="https://twitter.com/tomconder"
      />
      {' '}
      <GithubIcon
        url="https://github.com/tomconder"
      />
    </div>
  </header>
);

export default Header;
