import React from 'react';

import logo from 'assets/PLC_Logo_Horizontal.svg';

import styles from './index.module.scss';

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <img className={styles.logo} src={logo} alt="Por los chicos" />
    </div>
  );
}
