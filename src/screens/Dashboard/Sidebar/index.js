import React from 'react';
import { Link } from 'react-router-dom';
import iconProject from '../../../assets/briefcase.svg';
import iconNovelty from '../../../assets/file-text.svg';
import iconCampaing from '../../../assets/calendar.svg';
import iconUsers from '../../../assets/single-neutral-circle.svg';
import iconLogOut from '../../../assets/logout-1.svg';
import iconMenu from '../../../assets/menu.svg';
import iconPadrino from '../../../assets/padrino.svg';
import iconDashboard from '../../../assets/layout-dashboard.svg';
import styles from './index.module.scss';

function Sidebar() {
  const handleClickMenu1 = () => {
    const activate = document.getElementById('menu-1');
    if (activate.style.display === 'none') {
      activate.style.display = 'block';
    } else {
      activate.style.display = 'none';
    }
  };
  const handleClickMenu2 = () => {
    const activate = document.getElementById('menu-2');
    if (activate.style.display === 'none') {
      activate.style.display = 'block';
    } else {
      activate.style.display = 'none';
    }
  };
  return (
    <div className={styles.containerSide}>
      <p>
        <img className={styles.icono} src={iconDashboard} alt="icon-dashboard" />
        Dashboard
      </p>
      <div>
        <button onClick={handleClickMenu1} className={styles.menu} type="button">
          Contenido
          <img className={styles.icono} src={iconMenu} alt="menu" />
        </button>
        <ul id="menu-1" className={styles.linkMenu}>
          <li>
            <Link className={styles.link} to="3">
              <img className={styles.icono} src={iconProject} alt="icono-proyecto" />
              Proyectos
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="3">
              <img className={styles.icono} src={iconCampaing} alt="campaña" />
              Campañas
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="3">
              <img className={styles.icono} src={iconNovelty} alt="novedad" />
              Novedades
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={handleClickMenu2} className={styles.menu} type="button">
          Roles y permisos
          <img className={styles.icono} src={iconMenu} alt="menu" />
        </button>
        <ul id="menu-2" className={styles.linkMenu}>
          <li>
            <Link className={styles.link} to="3">
              <img className={styles.icono} src={iconPadrino} alt="padrino" />
              Padrinos
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="3">
              <img className={styles.icono} src={iconUsers} alt="usuarios" />
              Usuarios
            </Link>
          </li>
        </ul>
      </div>
      <button className={styles.menu} type="button">
        <img className={styles.icono} src={iconLogOut} alt="logout" />
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Sidebar;
