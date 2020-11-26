import React from 'react';

import getGreeting from 'helpers';

import userIcon from '../../assets/user-grey.svg';
import userIconActive from '../../assets/user-blue.svg';
import passIcon from '../../assets/password-grey.svg';
import passIconActive from '../../assets/password-blue.svg';

import Input from '../Input';
import Title from '../Title';
import Button from '../Button';
import AuthFbGoogle from '../AuthFbGoogle';

import styles from './index.module.scss';

function FormLogin() {
  return (
    <>
      <p className={styles.signUp}>
        ¿No tenés cuenta?
        <span>Registrate</span>
      </p>
      <Title upperTitle={getGreeting()}>
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
            label="Password"
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
      <AuthFbGoogle />
    </>
  );
}

export default FormLogin;
