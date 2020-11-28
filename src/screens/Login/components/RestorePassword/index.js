import React from 'react';
import getGreeting from 'helpers';

import Title from '../Title';
import FormRestorePassword from './components/FormRestorePassword';
// import SentEmailMessage from './components/SentEmailMessage';
import styles from './index.module.scss';

function RestorePassword() {
  return (
    <div className={styles.container}>
      <Title upperTitle={getGreeting()}>
        ¿Olvidaste tu Contraseña?
      </Title>
      <FormRestorePassword />
    </div>
  );
}

export default RestorePassword;
