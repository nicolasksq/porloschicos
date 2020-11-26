import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Input({
  label, htmlFor, type, error, iconActive, icon, onClick, onChange,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          type={type}
          id={htmlFor}
          onClick={onClick}
          onChange={onChange}
        />
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
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  error: null,
  iconActive: null,
  icon: null,
  onClick: null,
  onChange: null,
};

export default Input;
