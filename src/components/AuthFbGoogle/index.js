import React from 'react';

import fbIcon from '../../assets/fcb.svg';
import googleIcon from '../../assets/google.svg';
import Button from '../Button';

import styles from './index.module.scss';

function Register() {
  return (
    <div className={styles.containerButtons}>
      <span>o</span>
      <Button variantStyle="light">
        <img className={styles.iconBtn} src={fbIcon} alt="" />
        {' '}
        Registrate con Facebook
      </Button>
      <Button variantStyle="light">
        <img className={styles.iconBtn} src={googleIcon} alt="" />
        {' '}
        Registrate con Google
      </Button>
    </div>
  );
}

export default Register;
