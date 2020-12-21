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

  const handleChange = ({ target: { id, value } }) => {
    setForm((lastForm) => ({ ...lastForm, [id]: value }));
    setErrors((lastErrors) => ({ ...lastErrors, [id]: '' }));
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
      console.log(
        `status: ${error.response.data.status}`,
        `code error: ${error.response.data.errorCode}`,
        `name error: ${error.response.data.error}`,
      );
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

    if (usernameIsValid && passwordIsValid && dniIsValid && dniFormatIsValid) {
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
