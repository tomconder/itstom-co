import React from 'react'
import classNames from 'classnames'
import Layout from '../components/Layout'
import * as styles from './404.module.scss'
import { BrainJarIcon } from '../components/Icons'

export default function NotFound404() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={classNames(styles.content, styles.message)}>
          <BrainJarIcon size={128} />
          <h2>Oops! That isn&apos;t right...</h2>
        </div>
      </main>
    </Layout>
  )
}
