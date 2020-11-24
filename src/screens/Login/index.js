import React from 'react';

import ilustration from './assets/ilustration.svg';
import userIcon from './assets/user-grey.svg';
import userIconActive from './assets/user-blue.svg';
import passIcon from './assets/password-grey.svg';
import fbIcon from './assets/fcb.svg';
import googleIcon from './assets/google.svg';
import passIconActive from './assets/password-blue.svg';
import Input from './components/Input';
import Title from './components/Title';
import Button from './components/Button';

import ButtonAnchor from './components/ButtonAnchor';

import styles from './index.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.containerIlustration}>
        <h1>Logo</h1>
        <img className={styles.ilustration} src={ilustration} alt="Ilustracion" />
      </div>
      <div className={styles.containerForm}>
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
              error="El usuario o la contraseña no coinciden"
              icon={passIcon}
              iconActive={passIconActive}
            />
            <ButtonAnchor>
              ¿Olvidaste la contraseña?
            </ButtonAnchor>
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
          <Button light>
            <img className={styles.iconBtn} src={fbIcon} alt="" />
            {' '}
            Continuar con Facebook
          </Button>
          <Button light>
            <img className={styles.iconBtn} src={googleIcon} alt="" />
            {' '}
            Continuar con Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
