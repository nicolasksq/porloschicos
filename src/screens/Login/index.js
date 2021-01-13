import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AuthContext } from 'context/AuthContext';

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

function Login(props) {
  const [form, setForm] = useState({
    username: '',
    password: '',
    rememberPass: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [dataAuth, setDataAuth] = useContext(AuthContext);

  useEffect(() => {
    if (dataAuth.token !== '') {
      props.history.push('/private');
    }
    setIsLoading(false);
  }, [dataAuth]);

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
  };

  const sendForm = async () => {
    setIsSending(true);

    try {
      const res = await loginService(form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setDataAuth((lastData) => ({ ...lastData, token }));
    } catch (error) {
      const nameError = error.response?.data.error;
      const codeError = error.response?.data.errorCode;

      console.log(
        `status: ${error.response?.data.status}`,
        `code error: ${error.response?.data.errorCode}`,
        `name error: ${error.response?.data.error}`,
        codeError,
      );

      if (nameError === 'INVALID_CREDENTIALS') {
        setErrors((lastErrors) => ({ ...lastErrors, password: 'El usuario o la contraseña no coinciden' }));
      }

      if (!codeError && codeError !== 0) {
        setErrors((lastErrors) => ({ ...lastErrors, password: 'Hubo un error intente mas tarde' }));
      }
    }

    setIsSending(false);
  };

  const handleClick = () => {
    setForm(() => ({ rememberPass: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    const { emailIsValid, errorEmail } = validateEmail(username);

    const {
      isValid: passwordIsValid,
      error: errorPassword,
    } = validateLength({ minLength: 6, str: password, name: 'contraseña' });

    if (!emailIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, username: errorEmail }));
    }

    if (!passwordIsValid) {
      setErrors((lastErrors) => ({ ...lastErrors, password: errorPassword }));
    }

    if (passwordIsValid) {
      sendForm();
      setForm(() => ({ rememberPass: true }));
      localStorage.setItem('username', JSON.stringify({ username, password }));
    }
  };

  return (
    <ContainerAuth
      topText="¿No tenés cuenta?"
      topLink="Registrate"
      linkTo="sign-up"
      loading={isLoading}
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
            label="E-mail"
            icon={emailIcon}
            iconActive={emailIconActive}
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
              onClick={handleClick}
            />
          </div>
          <Button loading={isSending} disabled={isSending} type="submit">Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
