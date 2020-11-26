import React from 'react';

import getGreeting from 'helpers';

import userIcon from '../../assets/user-grey.svg';
import userIconActive from '../../assets/user-blue.svg';
import passIcon from '../../assets/password-grey.svg';
import passIconActive from '../../assets/password-blue.svg';
import emailIcon from '../../assets/mail.svg';
import emailIconActive from '../../assets/mail-blue.svg';
import dniIcon from '../../assets/id-card.svg';
import dniIconActive from '../../assets/id-card-blue.svg';

import Input from '../Input';
import Title from '../Title';
import Button from '../Button';
import AuthFbGoogle from '../AuthFbGoogle';

import styles from './index.module.scss';

function Register() {
  return (
    <>
      <Title upperTitle={getGreeting()}>
        Registrate
      </Title>
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="username"
            label="usuario"
            icon={userIcon}
            iconActive={userIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="password"
            label="Password"
            type="password"
            icon={passIcon}
            iconActive={passIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="e-mail"
            label="E-mail"
            icon={emailIcon}
            iconActive={emailIconActive}
          />
        </div>
        <div className={styles.containerInput}>
          <Input
            htmlFor="dni"
            label="Documento"
            icon={dniIcon}
            iconActive={dniIconActive}
          />
        </div>
        <div className={styles.containerButtonCheckbox}>
          <Button>Iniciar Sesión</Button>
        </div>
      </form>
      <AuthFbGoogle />
    </>
  );
}

export default Register;
