import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function ButtonAnchor({ children, submit }) {
  return (
    <button className={styles.buttonAnchor} type={submit ? 'submit' : 'button'}>
      {children}
    </button>
  );
}

ButtonAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
};

ButtonAnchor.defaultProps = {
  submit: false,
};

export default ButtonAnchor;
