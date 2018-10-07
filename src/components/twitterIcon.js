import React from 'react';
import * as PropTypes from 'prop-types';
import { Twitter } from 'react-feather';
import { link } from './header.module.scss';

const TwitterIcon = ({ url }) => (
  <a
    aria-label="twitter"
    className={link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Twitter size={24} />
  </a>
);

TwitterIcon.propTypes = {
  url: PropTypes.string,
};

TwitterIcon.defaultProps = {
  url: '',
};

export default TwitterIcon;
