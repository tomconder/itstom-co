import React from 'react'

import Layout from '../components/Layout'
import styles from './index.module.scss'
import tomcup from '../images/tomcup.png'


export default () => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.blurb}>
          <div className={styles.lighter}>Hi, it&apos;s Tom</div>
          <h1>I am an agile full stack software engineer</h1>
          <div className={styles.lighter}>I am a game designer</div>
        </div>
        <div className={styles.hero}>
          <img src={tomcup} alt="Tom with a cup" />
        </div>
      </div>
    </main>
  </Layout>
)
