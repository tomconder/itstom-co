import React from 'react';
import styles from './header.module.scss';
import Icon from './icon';

const Header = () => (
  <header>
    <div className={styles.title}>
      IT&apos;
    </div>
    <div className={styles.filler} />
    <div className={styles.social}>
      <Icon
        url="https://twitter.com/tomconder"
        text="Twitter"
      />
      {' '}
      <Icon
        url="https://github.com/tomconder"
        text="Github"
      />
    </div>
  </header>
);

export default Header;
