import React from 'react'
import classNames from 'classnames'
import Layout from '../components/Layout'
import { main, content, message } from './404.module.scss'
import { BrainJarIcon } from '../components/Icons'

const NotFound = () => (
  <Layout>
    <main className={main}>
      <div className={classNames(content, message)}>
        <BrainJarIcon size={128} />
        <h2>Oops! That isn&apos;t right...</h2>
      </div>
    </main>
  </Layout>
)

export default NotFound
