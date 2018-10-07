import React from 'react';
import styles from './header.module.scss';
import TwitterIcon from './twitterIcon';
import GithubIcon from './githubicon';

const Header = () => (
  <header>
    <div className={styles.title}>
      IT&apos;S TOM
    </div>
    <div className={styles.filler} />
    <div className={styles.social}>
      <TwitterIcon
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
