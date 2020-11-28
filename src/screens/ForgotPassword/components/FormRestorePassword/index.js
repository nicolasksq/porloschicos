import React from 'react';
import { Link } from 'react-router-dom';

import emailIcon from 'assets/mail.svg';
import emailIconActive from 'assets/mail-blue.svg';

import Input from 'components/Input';
import Button from 'components/Button';

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
          <Link to="/login">
            Regresar a iniciar sesión
          </Link>
        </div>
      </form>
    </>
  );
}

export default FormRestorePassword;
