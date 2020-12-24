import React, { useState } from 'react';

import { getGreeting, validateLength, validateEmail } from 'helpers';

import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Title from 'components/Title';
import Button from 'components/Button';
import AuthFbGoogle from 'components/AuthFbGoogle';

import { signUpService } from '../../services/authService';

import DATA_INPUTS from './contants/inputs';
import styles from './index.module.scss';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    du: '',
  });

  const [isSending, setIsSending] = useState(false);

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    du: '',
  });

  const [errorsLink, setErrorsLink] = useState({
    username: {
      message: '',
      linkTo: '',
    },
  });

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
    setErrorsLink({ username: {} });
  };

  const sendForm = async () => {
    setIsSending(true);

    try {
      const res = await signUpService(form);
      console.log(res.data);
      setForm({
        username: '', password: '', email: '', du: '',
      });
    } catch (error) {
      const errorCode = error.response?.data.errorCode;

      if (errorCode === 100) {
        setErrors((last) => ({ ...last, username: 'Este e-mail ya se encuentra registrado.' }));
        setErrorsLink({ username: { linkTo: '/login', message: 'Iniciar Sesión' } });
      }

      if (!errorCode && errorCode !== 0) {
        setErrors((last) => ({ ...last, du: 'Hubo un error intente más tarde' }));
      }
    }

    setIsSending(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username, password, email, du,
    } = form;

    const {
      isValid: usernameIsValid,
      error: errorUsername,
    } = validateLength({
      minLength: 6, maxLength: 20, str: username, name: 'nombre y apellido',
    });

    const {
      isValid: passwordIsValid,
      error: errorPassword,
    } = validateLength({ minLength: 6, str: password, name: 'contraseña' });

    const {
      isValid: dniIsValid,
    } = validateLength({
      minLength: 8, maxLength: 8, str: du, name: 'documento',
    });

    const dniFormatIsValid = /^[0-9]{8}$/.test(du);

    const { emailIsValid, errorEmail } = validateEmail(email);

    const allValidations = [
      usernameIsValid,
      passwordIsValid,
      dniIsValid,
      dniFormatIsValid,
      emailIsValid,
    ];

    const passAllValidations = allValidations.every((validation) => validation);

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
      setErrors((lastErrors) => ({ ...lastErrors, du: 'El documento es invalido' }));
    }

    if (passAllValidations) {
      sendForm();
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
        { DATA_INPUTS.map(({ name, id, ...rest }) => (
          <div className={styles.containerInput} key={id}>
            <Input
              key={id}
              htmlFor={name}
              value={form[name]}
              onChange={handleChange}
              error={errors[name]}
              errorLink={errorsLink[name]}
              {...rest}
            />
          </div>
        ))}
        <div className={styles.containerButtonCheckbox}>
          <Button loading={isSending} disabled={isSending} type="submit">Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

export default Register;
