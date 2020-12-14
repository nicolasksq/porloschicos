import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getGreeting, validateLength } from 'helpers';
import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import AuthFbGoogle from 'components/AuthFbGoogle';

import userIcon from 'assets/user-grey.svg';
import userIconActive from 'assets/user-blue.svg';
import passIcon from 'assets/password-grey.svg';
import passIconActive from 'assets/password-blue.svg';
import { postDataUser } from '../../service/reproService';

import styles from './index.module.scss';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
  };

  const sendForm = async () => {
    const { username, password } = form;
    const data = { username, password };
    const res = await postDataUser(data);
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

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

    if (!usernameIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, username: errorUsername }));
    }

    if (!passwordIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, password: errorPassword }));
    }

    if (usernameIsValid && passwordIsValid) {
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
            htmlFor="username"
            label="usuario"
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
          <Button type="submit">Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

export default Login;
