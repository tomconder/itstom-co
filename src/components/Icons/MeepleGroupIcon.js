import React from 'react'
import PropTypes from 'prop-types'

function MeepleGroupIcon({ fill, size, ...otherProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...otherProps}
    >
      <g id="many meeples" transform="translate(-1496.903)">
        <path
          d="M1496.9 0h100v100h-100z"
          fill="none"
        />
        <clipPath id="meeplegroup_svg__a">
          <path d="M1496.9 0h100v100h-100z" />
        </clipPath>
        <g clipPath="url(#meeplegroup_svg__a)">
          <path
            d="M1547.055 27.576c.06.003.118.003.175.003.057 0 .115 0 .172-.003v.01c5.536.246 9.98 6.402 10.044 13.979 4.44 1.071 21.536 5.603 21.536 11.866 0 7.2-13.255 7.527-13.255 7.527s17.999 28.635 9.165 28.309c-8.838-.33-16.527 0-16.527 0s-6.236 1.091-11.135-13.289c-4.902 14.38-11.139 13.289-11.139 13.289s-7.688-.33-16.526 0c-8.834.326 9.165-28.309 9.165-28.309s-13.255-.326-13.255-7.527c0-6.263 17.096-10.795 21.536-11.866.064-7.577 4.512-13.733 10.044-13.979v-.01z"
            stroke="#000"
            strokeWidth={2.509}
          />
          <path
            d="M1556.624 35.999a81.27 81.27 0 0 1 5.307-1.48c.053-6.27 3.733-11.363 8.31-11.566v-.008c.05.002.098.002.145.002.048 0 .095 0 .142-.002v.008c4.58.203 8.257 5.296 8.31 11.566 3.674.886 17.818 4.635 17.818 9.818 0 5.957-10.966 6.227-10.966 6.227s14.891 23.692 7.582 23.421c-7.311-.273-13.673 0-13.673 0s-5.16.904-9.213-10.994a38.958 38.958 0 0 1-1.355 3.446"
            fill="none"
            stroke="#000"
            strokeWidth={2.509}
          />
          <path
            d="M1525.411 66.91a36.021 36.021 0 0 1-1.575-3.919c-4.056 11.898-9.216 10.994-9.216 10.994s-6.36-.273-13.673 0c-7.309.27 7.583-23.421 7.583-23.421s-10.967-.27-10.967-6.227c0-5.183 14.144-8.932 17.818-9.818.053-6.27 3.733-11.363 8.31-11.566v-.008c.05.002.098.002.145.002.048 0 .095 0 .142-.002v.008c4.58.203 8.257 5.296 8.31 11.566 1.146.276 3.306.83 5.737 1.62"
            fill="none"
            stroke="#000"
            strokeWidth={2.509}
            strokeLinecap="butt"
          />
        </g>
      </g>
    </svg>
  )
}

MeepleGroupIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
}

MeepleGroupIcon.defaultProps = {
  fill: 'none',
  size: 64,
}

export default MeepleGroupIcon
