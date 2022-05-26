import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from './index.module.scss'

function Index() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.blurb}>
            <div className={styles.lighter}>Hi, it&apos;s Tom</div>
            <h1>I am an agile full stack software engineer</h1>
            <div className={styles.lighter}>I am a game designer</div>
          </div>
          <div className={styles.hero}>
            <StaticImage
              src="../images/tomcup.png"
              alt="Tom with a cup"
              placeholder="blurred"
              layout="fixed"
              width={150}
              height={200}
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Index
