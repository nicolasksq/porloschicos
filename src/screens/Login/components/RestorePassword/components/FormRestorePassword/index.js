import React from 'react';

import emailIcon from '../../../../assets/mail.svg';
import emailIconActive from '../../../../assets/mail-blue.svg';

import Input from '../../../Input';
import Button from '../../../Button';

import styles from './index.module.scss';

function FormRestorePassword() {
  return (
    <>
      <p className={styles.subtitle}>
        Ingresá tu e-mail y te enviaremos instrucciones para restablecer la contraseña
      </p>
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="e-mail"
            label="E-mail"
            icon={emailIcon}
            iconActive={emailIconActive}
          />
        </div>
        <div className={styles.containerButton}>
          <Button>Restablecer contraseña</Button>
          <Button variantStyle="anchor">
            Regresar a iniciar sesión
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormRestorePassword;
