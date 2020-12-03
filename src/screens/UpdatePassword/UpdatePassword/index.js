import React, { useState } from 'react';
import getGreeting from 'helpers';

import passwordIcon from '../../../assets/password-grey.svg';
import passwordIconActive from '../../../assets/password-blue.svg';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

import styles from './index.module.scss';

function UpdatePassword() {
  const [form, setState] = useState({
    password: '',
  });
  const update = (e) => {
    setState({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className={styles.container}>
      <Title upperTitle={getGreeting()}>
        Actualizar Contraseña
      </Title>
      <p className={styles.subtitle}>
        Escribí tu nueva contraseña
      </p>
      <form className="form" action="">
        <div className={styles.containerInput}>
          <Input
            htmlFor="password"
            label="Contraseña"
            type="password"
            icon={passwordIcon}
            iconActive={passwordIconActive}
            id="password"
            value="password"
            onChange={update}
          />
        </div>
        <div className={styles.containerButton}>
          <Button>Actualizar contraseña</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
