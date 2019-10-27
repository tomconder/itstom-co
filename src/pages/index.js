import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import styles from './index.module.scss'

const Index = ({ data }) => (
  <Layout>
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.blurb}>
          <div className={styles.lighter}>Hi, it&apos;s Tom</div>
          <h1>I am an agile full stack software engineer</h1>
          <div className={styles.lighter}>I am a game designer</div>
        </div>
        <div className={styles.hero}>
          <Img fixed={data.tomWithCup.childImageSharp.fixed} alt="Tom with a cup" />
        </div>
      </div>
    </main>
  </Layout>
)

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

Index.defaultProps = {
  data: {},
}

export default Index

export const query = graphql`
  query {
    tomWithCup: file(relativePath: { eq: "tomcup.png" }) {
      childImageSharp {
        fixed(width: 150)  {
            ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
