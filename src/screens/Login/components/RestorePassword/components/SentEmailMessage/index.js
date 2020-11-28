import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../../Title';
import Button from '../../../Button';

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
        <Button>Volver a iniciar sesión</Button>
      </div>
      <Button variantStyle="anchor">
        Regresar a iniciar sesión
      </Button>
    </>
  );
}

SentEmailMessage.propTypes = {
  email: PropTypes.string.isRequired,
};

export default SentEmailMessage;
