import React from 'react';
import logo from '../../assets/PLC_Logo_Horizontal.svg';
import Sidebar from './Sidebar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './index.module.scss';

function Dashboard() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo-por-los-chicos" />
      <p className={styles.admin}>Administrador</p>
      <Sidebar />
      <div className={styles.search}>
        <Input htmlFor="Buscar" label="Buscar" />
        <Button className={styles.button}> + Crear nuevo</Button>
      </div>
    </div>
  );
}

export default Dashboard;
