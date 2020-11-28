import React from 'react';
import { Link } from 'react-router-dom';

import getGreeting from 'helpers';
import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import AuthFbGoogle from 'components/AuthFbGoogle';

import userIcon from 'assets/user-grey.svg';
import userIconActive from 'assets/user-blue.svg';
import passIcon from 'assets/password-grey.svg';
import passIconActive from 'assets/password-blue.svg';

import styles from './index.module.scss';

function Login() {
  return (
    <ContainerAuth
      topText="¿No tenés cuenta?"
      topLink="Registrate"
      linkTo="sign-up"
    >
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
          <Link className={styles.link} to="/forgot-password">
            ¿Olvidaste la contraseña?
          </Link>
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
    </ContainerAuth>
  );
}

export default Login;
