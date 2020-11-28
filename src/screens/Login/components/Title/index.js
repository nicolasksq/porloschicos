import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Title({ children, upperTitle, Tag }) {
  return (
    <div className={styles.containerTitle}>
      { upperTitle && <p className={styles.welcomeText}>{upperTitle}</p> }
      <Tag className={styles.title}>{children}</Tag>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  upperTitle: PropTypes.string,
  Tag: PropTypes.string,
};

Title.defaultProps = {
  upperTitle: null,
  Tag: 'h1',
};
export default Title;
