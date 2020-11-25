import React from 'react';

import userIcon from '../../assets/user-grey.svg';
import userIconActive from '../../assets/user-blue.svg';
import passIcon from '../../assets/password-grey.svg';
import fbIcon from '../../assets/fcb.svg';
import googleIcon from '../../assets/google.svg';
import passIconActive from '../../assets/password-blue.svg';

import Input from '../Input';
import Title from '../Title';
import Button from '../Button';

import styles from './index.module.scss';

function Register() {
  return (
    <>
      <Title upperTitle="¡Bienvenido!">
        Registrate
      </Title>
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="username"
            label="usuario"
            icon={userIcon}
            iconActive={userIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="password"
            label="Password"
            type="password"
            icon={passIcon}
            iconActive={passIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="e-mail"
            label="E-mail"
            icon={passIcon}
            iconActive={passIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="dni"
            label="Documento"
            icon={passIcon}
            iconActive={passIconActive}
          />
        </div>
        <div className={styles.containerButtonCheckbox}>
          <Button>Iniciar Sesión</Button>
        </div>
      </form>
      <div className={styles.containerButtons}>
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
    </>
  );
}

export default Register;
