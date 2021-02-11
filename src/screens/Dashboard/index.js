import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/PLC_Logo_Horizontal.svg';
import styles from './index.module.scss';

function Dashboard() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo-por-los-chicos" />
      <div className={styles.containerSide}>
        <p>Dashboard</p>
        <div>
          <button className={styles.menu} type="button">Contenido</button>
          <ul className={styles.linkMenu}>
            <li><Link className={styles.link} to="3">Proyectos</Link></li>
            <li><Link className={styles.link} to="3">Campañas</Link></li>
            <li><Link className={styles.link} to="3">Novedades</Link></li>
          </ul>
        </div>
        <div>
          <button className={styles.menu} type="button"> Roles y permisos</button>
          <ul className={styles.linkMenu}>
            <li><Link className={styles.link} to="3">Padrinos</Link></li>
            <li><Link className={styles.link} to="3">Usuarios</Link></li>
          </ul>
        </div>
        <button className={styles.menu} type="button">Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Dashboard;
