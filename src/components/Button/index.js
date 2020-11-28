import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Button({ children, submit, variantStyle }) {
  return (
    <button className={styles[variantStyle]} type={submit ? 'submit' : 'button'}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  variantStyle: PropTypes.oneOf(['light', 'anchor', 'primary']),
};

Button.defaultProps = {
  submit: false,
  variantStyle: 'primary',
};

export default Button;
