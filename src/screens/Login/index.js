import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getGreeting, validateLength, validateEmail } from 'helpers';
import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import AuthFbGoogle from 'components/AuthFbGoogle';

import emailIcon from 'assets/mail.svg';
import emailIconActive from 'assets/mail-blue.svg';
import passIcon from 'assets/password-grey.svg';
import passIconActive from 'assets/password-blue.svg';
import { loginService } from '../../services/authService';

import styles from './index.module.scss';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
  };

  const sendForm = async () => {
    setIsSending(true);

    try {
      const res = await loginService(form);
      console.log(res);
    } catch (error) {
      const nameError = error.response.data.error;
      console.log(
        `status: ${error.response.data.status}`,
        `code error: ${error.response.data.errorCode}`,
        `name error: ${error.response.data.error}`,
      );

      if (nameError === 'INVALID_CREDENTIALS') {
        setErrors((lastErrors) => ({ ...lastErrors, password: 'El usuario o la contraseña son invalidos' }));
      }
    }

    setIsSending(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    const { emailIsValid, errorEmail } = validateEmail(email);

    const {
      isValid: passwordIsValid,
      error: errorPassword,
    } = validateLength({ minLength: 6, str: password, name: 'contraseña' });

    if (!emailIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, email: errorEmail }));
    }

    if (!passwordIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, password: errorPassword }));
    }

    if (passwordIsValid && emailIsValid) {
      sendForm();
    }
  };

  return (
    <ContainerAuth
      topText="¿No tenés cuenta?"
      topLink="Registrate"
      linkTo="sign-up"
    >
      <Title upperTitle={getGreeting()}>
        Iniciar Sesión
      </Title>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className={styles.containerInput}>
          <Input
            htmlFor="email"
            label="E-mail"
            type="email"
            icon={emailIcon}
            iconActive={emailIconActive}
            value={form.email}
            onChange={handleChange}
            error={errors?.email}
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
          <Link className={styles.link} to="/forgot-password">
            ¿Olvidaste la contraseña?
          </Link>
        </div>
        <div className={styles.containerButtonCheckbox}>
          <div className={styles.containerCheckbox}>
            <Input
              htmlFor="rememberPass"
              type="checkbox"
              label="Recordar Contraseña"
            />
          </div>
          <Button loading={isSending} disabled={isSending} type="submit">Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

export default Login;
