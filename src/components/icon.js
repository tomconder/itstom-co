import React from 'react';
import * as PropTypes from 'prop-types';

const Icon = ({ url, text }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

Icon.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

Icon.defaultProps = {
  url: '',
  text: '',
};

export default Icon;
