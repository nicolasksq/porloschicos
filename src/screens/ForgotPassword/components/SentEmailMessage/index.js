import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Button from 'components/Button';

import styles from './index.module.scss';

function SentEmailMessage({ email }) {
  return (
    <>
      <div className={styles.containerMessage}>
        <Title Tag="h2">
          Enlace enviado a tu e-mail
        </Title>
        <p className={styles.messageSuccess}>
          Vas a recibir un enlace en unos instantes. Abrilo y restablecé tu contraseña.
        </p>
        <p className={styles.email}>{ email }</p>
        <Button>
          <Link to="/login">
            <span>Volver a iniciar sesión</span>
          </Link>
        </Button>
      </div>
      <Link to="/login">
        Regresar a iniciar sesión
      </Link>
    </>
  );
}

SentEmailMessage.propTypes = {
  email: PropTypes.string.isRequired,
};

export default SentEmailMessage;
