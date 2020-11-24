import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Input({
  label, htmlFor, type, error, iconActive, icon,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <div className={styles.containerInput}>
        <input className={styles.input} type={type} id={htmlFor} />
        { error && (
        <p className={styles.error}>
          {' '}
          { error }
          {' '}
        </p>
        ) }
        { icon
          && (
          <div className={styles.containerIcon}>
            <img className={styles.icon} src={icon} alt=" " />
            <img className={styles.iconActive} src={iconActive || icon} alt=" " />
          </div>
          )}
      </div>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  iconActive: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  error: null,
  iconActive: null,
  icon: null,
};

export default Input;
