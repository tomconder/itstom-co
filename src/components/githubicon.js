import React from 'react';
import * as PropTypes from 'prop-types';
import { Github } from 'react-feather';
import { link } from './header.module.scss';

const GithubIcon = ({ url }) => (
  <a
    aria-label="github"
    className={link}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Github size={24} />
  </a>
);

GithubIcon.propTypes = {
  url: PropTypes.string,
};

GithubIcon.defaultProps = {
  url: '',
};

export default GithubIcon;
