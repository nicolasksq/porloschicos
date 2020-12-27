import React from 'react';
import Title from 'components/Title';
import styles from './index.module.scss';

function MessageExit() {
  return (
    <>
      <div className={styles.containerMessage}>
        <Title Tag="h2">
          Ya casi...
        </Title>
        <p className={styles.messageSuccess}>
          Recibira un mail para completar el registro.
        </p>
      </div>
    </>
  );
}

export default MessageExit;
