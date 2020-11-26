import React from 'react';
import getGreeting from 'helpers';

import userIcon from '../../assets/user-grey.svg';
import userIconActive from '../../assets/user-blue.svg';

import Input from '../Input';
import Title from '../Title';
import Button from '../Button';

import styles from './index.module.scss';

function RestorePassword() {
  return (
    <div className={styles.container}>
      <Title upperTitle={getGreeting()}>
        ¿Olvidaste tu Contraseña?
      </Title>
      <p className={styles.subtitle}>
        Ingresá tu e-mail y te enviaremos instrucciones para restablecer la contraseña
      </p>
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="e-mail"
            label="E-mail"
            icon={userIcon}
            iconActive={userIconActive}
          />
        </div>
        <br />
        <div className={styles.containerButton}>
          <Button>Restablecer contraseña</Button>
          <br />
          <Button variantStyle="anchor">
            Regresar a inicio de sesion
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RestorePassword;
