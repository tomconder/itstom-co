import React from 'react';
import * as PropTypes from 'prop-types';
import { Twitter } from 'react-feather';
import styles from './Header.module.scss';

const TwitterIcon = ({ url }) => (
  <a
    aria-label="twitter"
    className={styles.link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Twitter size={24} />
    <span className={styles.name}>@tomconder</span>
  </a>
);

TwitterIcon.propTypes = {
  url: PropTypes.string,
};

TwitterIcon.defaultProps = {
  url: '',
};

export default TwitterIcon;