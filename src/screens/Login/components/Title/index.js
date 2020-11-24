import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Title({ children, upperTitle, tag }) {
  return (
    <div className={styles.containerTitle}>
      { upperTitle && <p className={styles.welcomeText}>{upperTitle}</p> }
      <tag className={styles.title}>{children}</tag>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  upperTitle: PropTypes.string,
  tag: PropTypes.string,
};

Title.defaultProps = {
  upperTitle: null,
  tag: 'h1',
};
export default Title;
