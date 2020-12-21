import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Button({
  children, type, variantStyle, loading, disabled,
}) {
  return (
    <button
      className={styles[variantStyle]}
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
    >
      {loading ? <div className={styles.loader} /> : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variantStyle: PropTypes.oneOf(['light', 'anchor', 'primary']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  variantStyle: 'primary',
  loading: false,
  disabled: false,
};

export default Button;
