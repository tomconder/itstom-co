import React from 'react'
import { Twitter } from 'react-feather'
import PropTypes from 'prop-types'

const TwitterIcon = ({ size }) => (
  <Twitter size={size} />
)

TwitterIcon.propTypes = {
  size: PropTypes.number,
}

TwitterIcon.defaultProps = {
  size: 64,
}

export default TwitterIcon
