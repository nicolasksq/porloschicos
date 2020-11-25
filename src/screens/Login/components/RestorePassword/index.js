import React from 'react';

import userIcon from '../../assets/user-grey.svg';
import userIconActive from '../../assets/user-blue.svg';

import Input from '../Input';
import Title from '../Title';
import Button from '../Button';

import styles from './index.module.scss';

function RestorePassword() {
  return (
    <div className={styles.container}>
      <Title upperTitle="¡Bienvenido!">
        Restablecer Contraseña
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
