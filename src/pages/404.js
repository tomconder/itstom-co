import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from './404.module.scss';

export default () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.content}>
        <h2>Oops! That isn&apos;t right...</h2>
      </div>
    </main>
  </Layout>
);
