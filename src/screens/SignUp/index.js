import React, { useState } from 'react';

import getGreeting from 'helpers';

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

import styles from './index.module.scss';

function Register() {
  const [form, setState] = useState({
    username: '',
    password: '',
    email: '',
    dni: '',
  });
  const update = (e) => {
    setState({
      ...form,
      [e.target.id]: e.target.value,
    });
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
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="username"
            label="Usuario"
            icon={userIcon}
            iconActive={userIconActive}
            id="username"
            value={form.username}
            onChange={update}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="password"
            label="Password"
            type="password"
            icon={passIcon}
            iconActive={passIconActive}
            id="password"
            value={form.password}
            onChange={update}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="e-mail"
            label="E-mail"
            icon={emailIcon}
            iconActive={emailIconActive}
            id="email"
            value={form.email}
            onChange={update}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="dni"
            label="Documento"
            icon={dniIcon}
            iconActive={dniIconActive}
            id="dni"
            value={form.dni}
            onChange={update}
          />
        </div>
        <div className={styles.containerButtonCheckbox}>
          <Button>Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </ContainerAuth>
  );
}

export default Register;
