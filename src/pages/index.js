import React from 'react';
import Layout from '../components/Layout';
import styles from './index.module.scss';

export default () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.content}>
        <h2>Hi, it&apos;s Tom</h2>
        <h1>
          I am a full stack software engineer
        </h1>
        <h2>
          I am a
          {' '}
          <span role="img" aria-label="dice">🎲</span>
          {' '}
          game designer.
        </h2>
      </div>
    </main>
  </Layout>
);
