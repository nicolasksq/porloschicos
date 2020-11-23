import React from 'react';
import ilustration from './assets/ilustration.svg';
/*
import userIcon from './assets/user-grey.svg';
import userIconActive from './assets/user-blue.svg';
import passIcon from './assets/password-grey.svg';
import passIconActive from './assets/password-blue.svg';
import Input from './components/Input';
*/
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
      </div>
    </div>
  );
}

export default Login;
