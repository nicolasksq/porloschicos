import React from 'react';

import ilustration from './assets/ilustration.svg';
import logo from './assets/PLC_Logo_Horizontal.svg';
// import FormLogin from './components/FormLogin';
import RestorePassword from './components/RestorePassword';
// import Register from './components/Register';
import styles from './index.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.containerIlustration}>
        <img className={styles.logo} src={logo} alt="Por los chicos" />
        <img className={styles.ilustration} src={ilustration} alt="Ilustracion" />
      </div>
      <div className={styles.containerForm}>
        <RestorePassword />
      </div>
    </div>
  );
}

export default Login;
