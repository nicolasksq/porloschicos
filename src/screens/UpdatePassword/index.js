import React, { useState } from 'react';
import { getGreeting, validateLength } from 'helpers';

import passwordIcon from 'assets/password-grey.svg';
import passwordIconActive from 'assets/password-blue.svg';

import ContainerAuth from 'components/ContainerAuth';
import Input from 'components/Input';
import Button from 'components/Button';
import Title from 'components/Title';

import styles from './index.module.scss';

function UpdatePassword() {
  const [password, setPassword] = useState({
    value: '',
    passwordError: '',
  });

  const handleChange = ({ target: { value } }) => {
    setPassword({
      errorPassword: '',
      value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      isValid: passwordIsValid,
      error: errorPassword,
    } = validateLength({ minLength: 6, str: password.value, name: 'contraseña' });

    if (!passwordIsValid) {
      setPassword((last) => ({ ...last, errorPassword }));
    } else {
      console.log('sending');
    }
  };

  return (
    <ContainerAuth>
      <div className={styles.container}>
        <Title upperTitle={getGreeting()}>
          Actualizar Contraseña
        </Title>
        <p className={styles.subtitle}>
          Escribí tu nueva contraseña
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className={styles.containerInput}>
            <Input
              htmlFor="password"
              label="Contraseña"
              type="password"
              icon={passwordIcon}
              iconActive={passwordIconActive}
              id="password"
              value={password.value}
              onChange={handleChange}
              error={password.errorPassword}
              required
            />
          </div>
          <div className={styles.containerButton}>
            <Button type="submit">Actualizar contraseña</Button>
          </div>
        </form>
      </div>
    </ContainerAuth>
  );
}

export default UpdatePassword;
