import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Button({ children, type, variantStyle }) {
  return (
    <button className={styles[variantStyle]} type={type === 'submit' ? 'submit' : 'button'}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variantStyle: PropTypes.oneOf(['light', 'anchor', 'primary']),
};

Button.defaultProps = {
  type: 'button',
  variantStyle: 'primary',
};

export default Button;
