import React from 'react';
import Layout from '../components/Layout';
import styles from './index.module.scss';
import tomcup from '../images/tomcup.png';

require('typeface-exo');
require('typeface-roboto');

export default () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.blurb}>
          <h2>Hi, it&apos;s Tom</h2>
          <h1>I am a full stack software engineer</h1>
          <h2>I am a game designer</h2>
        </div>
        <div className={styles.hero}>
          <img src={tomcup} alt="Tom with a cup" />
        </div>
      </div>
    </main>
  </Layout>
);
