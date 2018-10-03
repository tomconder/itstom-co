import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header>
    <div className={styles.title}>
      IT&apos;S TOM
    </div>
    <div className={styles.filler} />
    <div className={styles.social}>
      <a
        href="https://twitter.com/tomconder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      {' '}
      <a
        href="https://github.com/tomconder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  </header>
);

export default Header;
