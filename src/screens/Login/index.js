import React from 'react';

import ilustration from './assets/ilustration.svg';
import userIcon from './assets/user-grey.svg';
import userIconActive from './assets/user-blue.svg';
import passIcon from './assets/password-grey.svg';
import passIconActive from './assets/password-blue.svg';
import Input from './components/Input';
import styles from './index.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.containerIlustration}>
        <h1>Logo</h1>
        <img src={ilustration} alt="Ilustracion" />
      </div>
      <div className={styles.containerForm}>
        <p className={styles.signUp}>
          ¿No tenés cuenta?
          <span>Registrate</span>
        </p>

        <div className={styles.containerTitle}>
          <p className={styles.welcomeText}>¡Bienvenido!</p>
          <h1 className={styles.title}>Iniciar Sesión</h1>
        </div>

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
            <button className={styles.buttonAnchor} type="button">
              ¿Olvidaste la contraseña?
            </button>
          </div>
          <div className={styles.containerButtonCheckbox}>
            <div className={styles.containerCheckbox}>
              <input className={styles.checkBox} type="checkbox" id="rememberPass" />
              <label htmlFor="rememberPass">Recordar Contraseña</label>
            </div>
            <button className={styles.button} type="button">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
