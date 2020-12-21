import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import emailIcon from 'assets/mail.svg';
import emailIconActive from 'assets/mail-blue.svg';

import { validateEmail } from 'helpers';

import Input from 'components/Input';
import Button from 'components/Button';
import { postDataUser } from '../../../../services/reproService';

import styles from './index.module.scss';

function FormRestorePassword() {
  const [email, setEmail] = useState({
    value: '',
    errorEmail: '',
  });

  const handleChange = ({ target: { value } }) => {
    setEmail({
      errorEmail: '',
      value,
    });
  };

  const sendForm = async () => {
    const data = { email };
    const res = await postDataUser(data);
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { emailIsValid, errorEmail } = validateEmail(email.value);

    if (!emailIsValid) {
      setEmail((last) => ({ ...last, errorEmail }));
    } else {
      sendForm();
    }
  };

  return (
    <>
      <p className={styles.subtitle}>
        Ingresá tu e-mail y te enviaremos instrucciones para restablecer la contraseña
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className={styles.containerInput}>
          <Input
            htmlFor="email"
            label="E-mail"
            type="email"
            value={email.value}
            icon={emailIcon}
            iconActive={emailIconActive}
            onChange={handleChange}
            error={email.errorEmail}
            required
          />
        </div>
        <div className={styles.containerButton}>
          <Button type="submit">Restablecer contraseña</Button>
          <Link to="/login">
            Regresar a iniciar sesión
          </Link>
        </div>
      </form>
    </>
  );
}

export default FormRestorePassword;
