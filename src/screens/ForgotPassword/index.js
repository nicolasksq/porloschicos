import React from 'react';
import getGreeting from 'helpers';

import Title from 'components/Title';
import ContainerAuth from 'components/ContainerAuth';
import FormRestorePassword from './components/FormRestorePassword';
// import SentEmailMessage from './components/SentEmailMessage';
import styles from './index.module.scss';

function RestorePassword() {
  return (
    <ContainerAuth>
      <div className={styles.container}>
        <Title upperTitle={getGreeting()}>
          ¿Olvidaste tu Contraseña?
        </Title>
        <FormRestorePassword />
      </div>
    </ContainerAuth>
  );
}

export default RestorePassword;
