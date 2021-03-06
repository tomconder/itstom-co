import React from 'react'

import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import {
  blurb, content, hero, lighter, main,
} from './index.module.scss'

const Index = ({ data }) => (
  <Layout>
    <main className={main}>
      <div className={content}>
        <div className={blurb}>
          <div className={lighter}>
            Creativity, leadership and mentoring
          </div>
          <h1>It&apos;s Tom</h1>
          <div className={lighter}>I strive for excellence and have fun
            doing it
          </div>
        </div>
        <div className={hero}>
          <GatsbyImage
            image={getImage(data.tomWithCup.childImageSharp)}
            alt="Tom with a cup"
          />
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

export const query = graphql`{
  tomWithCup: file(relativePath: {eq: "tomcup.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 150,
        quality: 100,
        placeholder: BLURRED,
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
}
`
