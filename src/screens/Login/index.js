import React from 'react';

import ilustration from './assets/ilustration.svg';
import FormLogin from './components/FormLogin';
import styles from './index.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.containerIlustration}>
        <h1>Logo</h1>
        <img className={styles.ilustration} src={ilustration} alt="Ilustracion" />
      </div>
      <div className={styles.containerForm}>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
