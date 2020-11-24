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

function FormLogin() {
  return (
    <>
      <p className={styles.signUp}>
        ¿No tenés cuenta?
        <span>Registrate</span>
      </p>
      <Title upperTitle="¡Bienvenidos!">
        Iniciar Sesión
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
            label="Contraseña"
            type="password"
            icon={passIcon}
            iconActive={passIconActive}
          />
          <Button variantStyle="anchor">
            ¿Olvidaste la contraseña?
          </Button>
        </div>
        <div className={styles.containerButtonCheckbox}>
          <div className={styles.containerCheckbox}>
            <Input
              htmlFor="rememberPass"
              type="checkbox"
              label="Recordar Contraseña"
            />
          </div>
          <Button>Iniciar Sesión</Button>
        </div>
      </form>
      <div className={styles.containerButtons}>
        <Button variantStyle="light">
          <img className={styles.iconBtn} src={fbIcon} alt="" />
          {' '}
          Continuar con Facebook
        </Button>
        <Button variantStyle="light">
          <img className={styles.iconBtn} src={googleIcon} alt="" />
          {' '}
          Continuar con Google
        </Button>
      </div>
    </>
  );
}

export default FormLogin;
