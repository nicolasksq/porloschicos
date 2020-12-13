import React, { useState } from 'react';

import { getGreeting, validateLength, validateEmail } from 'helpers';

import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import AuthFbGoogle from 'components/AuthFbGoogle';

import userIcon from 'assets/user-grey.svg';
import userIconActive from 'assets/user-blue.svg';
import passIcon from 'assets/password-grey.svg';
import passIconActive from 'assets/password-blue.svg';
import emailIcon from 'assets/mail.svg';
import emailIconActive from 'assets/mail-blue.svg';
import dniIcon from 'assets/id-card.svg';
import dniIconActive from 'assets/id-card-blue.svg';
import { postDataUser } from '../../service/reproService';

import styles from './index.module.scss';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    dni: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    dni: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
  };

  const useEffect = async () => {
    const {
      username, password, email, dni,
    } = form;
    console.log(form);
    const data = {
      username, password, email, dni,
    };
    const res = await postDataUser(data);
    setForm({ visible: false });
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username, password, email, dni,
    } = form;

    const {
      isValid: usernameIsValid,
      error: errorUsername,
    } = validateLength({
      minLength: 6, maxLength: 20, str: username, name: 'usuario',
    });

    const {
      isValid: passwordIsValid,
      error: errorPassword,
    } = validateLength({ minLength: 6, str: password, name: 'contraseña' });

    const {
      isValid: dniIsValid,
    } = validateLength({
      minLength: 8, maxLength: 8, str: dni, name: 'documento',
    });

    const dniFormatIsValid = /^[0-9]{8}$/.test(dni);

    const { emailIsValid, errorEmail } = validateEmail(email);

    if (!usernameIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, username: errorUsername }));
    }

    if (!passwordIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, password: errorPassword }));
    }

    if (!emailIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, email: errorEmail }));
    }

    if (!dniIsValid || !dniFormatIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, dni: 'El documento es invalido' }));
    }

    if (usernameIsValid && passwordIsValid && dniIsValid && dniFormatIsValid) {
      useEffect((lastForm) => ({ ...lastForm }));
    }
  };

  return (
    <ContainerAuth
      topText="¿Ya tenés una cuenta?"
      topLink="Iniciar Sesión"
      linkTo="/login"
    >
      <Title upperTitle={getGreeting()}>
        Registrate
      </Title>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className={styles.containerInput}>
          <Input
            htmlFor="username"
            label="Usuario"
            icon={userIcon}
            iconActive={userIconActive}
            value={form.username}
            onChange={handleChange}
            error={errors.username}
            required
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="password"
            label="Password"
            type="password"
            icon={passIcon}
            iconActive={passIconActive}
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="email"
            label="E-mail"
            type="email"
            icon={emailIcon}
            iconActive={emailIconActive}
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="dni"
            label="Documento"
            type="number"
            icon={dniIcon}
            iconActive={dniIconActive}
            value={form.dni}
            onChange={handleChange}
            error={errors.dni}
            required
          />
        </div>
        <div className={styles.containerButtonCheckbox}>
          <Button type="submit">Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

export default Register;
