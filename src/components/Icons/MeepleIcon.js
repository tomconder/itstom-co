import React from 'react'
import PropTypes from 'prop-types'

const MeepleIcon = ({ fill, size, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={1.5}
    {...otherProps}
  >
    <g transform="translate(-1496.9)">
      <path
        d="M1496.9 0h100v100h-100z"
        fill="none"
      />
      <clipPath id="meeple_svg__a">
        <path
          d="M1496.9 0h100v100h-100z"
        />
      </clipPath>
      <g clipPath="url(#meeple_svg__a)">
        <path
          d="M1546.95.799c.095.005.185.005.276.005.09 0 .18 0 .27-.005v.016c8.717.387 15.715 10.08 15.815 22.012 6.993 1.687 33.912 8.822 33.912 18.685 0 11.338-20.87 11.852-20.87 11.852s28.34 45.09 14.43 44.576c-13.916-.52-26.023 0-26.023 0s-9.82 1.72-17.534-20.924c-7.72 22.643-17.54 20.924-17.54 20.924s-12.107-.52-26.023 0c-13.91.515 14.43-44.576 14.43-44.576s-20.87-.514-20.87-11.852c0-9.863 26.919-16.998 33.911-18.685.101-11.932 7.104-21.625 15.816-22.012V.799z"
          fill={fill}
          stroke="#000"
          strokeWidth={2.509}
        />
      </g>
    </g>
  </svg>
)

MeepleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
}

MeepleIcon.defaultProps = {
  fill: 'none',
  size: 64,
}

export default MeepleIcon
