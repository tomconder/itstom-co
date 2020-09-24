import React from 'react'
import PropTypes from 'prop-types'
import { GitHub } from 'react-feather'

const GithubIcon = ({ size }) => (
  <GitHub size={size} />
)

GithubIcon.propTypes = {
  size: PropTypes.number,
}

GithubIcon.defaultProps = {
  size: 64,
}

export default GithubIcon
