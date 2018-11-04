import React from 'react'
import PropTypes from 'prop-types'

const MugIcon = ({ fill, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 112 112"
    fill="none"
    stroke="#000"
    strokeWidth="2"
  >
    <g transform="translate(-1496.9)">
      <clipPath id="a">
        <rect x="1496.9" y="0" width="112" height="112" />
      </clipPath>
      <g clipPath="url(#a)">
        <path
          d="M1564.704 83.301c-1.217 4.096-15.683 7.333-33.324 7.333s-32.107-3.237-33.323-7.333h-.107V20.21h.039a1.933 1.933 0 0 1-.015-.243c0-4.355 14.969-7.892 33.406-7.892 18.438 0 33.408 3.537 33.408 7.892 0 .081-.006.163-.017.243h.039v9.755c2.939-1.37 6.656-2.082 11.338-1.96 12.03.311 21.802 11.58 21.802 25.846 0 14.264-9.769 25.845-21.802 25.845-4.7 0-8.413-.72-11.338-2.024v5.63h-.106zm.106-16.895c2.088 2.71 5.58 4.361 11.338 4.361 7.878 0 14.273-7.581 14.273-16.92 0-9.339-6.398-16.716-14.273-16.92-5.705-.148-9.223 1.596-11.338 4.482v24.997z"
          fill={fill}
        />
        <ellipse
          cx="38.681"
          cy="22.748"
          rx="32.927"
          ry="7.78"
          transform="matrix(.84739 0 0 .60886 1498.48 7.439)"
          fill="black"
        />
      </g>
    </g>
  </svg>
)

MugIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
}

MugIcon.defaultProps = {
  fill: 'none',
  size: 64,
}

export default MugIcon
