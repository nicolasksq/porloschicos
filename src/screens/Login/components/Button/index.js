import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Button({ children, submit, light }) {
  const styleButton = light ? 'light' : 'primary';

  return (
    <button className={styles[styleButton]} type={submit ? 'submit' : 'button'}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  light: PropTypes.bool,
};

Button.defaultProps = {
  submit: false,
  light: false,
};

export default Button;
