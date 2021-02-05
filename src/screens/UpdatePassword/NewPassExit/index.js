import React from 'react';
import Title from 'components/Title';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function NewPasswordExit() {
  return (
    <>
      <div className={styles.conatinerMessage}>
        <Title Tag="h2">
          Contraseña Actualizada
        </Title>
        <p className={styles.messageSuccess}>
          Ahora ya puede iniciar sesión.
        </p>
        <Button>
          <Link to="/login">
            Volver a inicio de sesión
          </Link>
        </Button>
      </div>

    </>
  );
}

export default NewPasswordExit;
