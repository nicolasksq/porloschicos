import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ilustration from 'assets/ilustration.svg';
import logo from 'assets/PLC_Logo_Horizontal.svg';
// import FormLogin from './components/FormLogin';
// import RestorePassword from './components/RestorePassword';
// import Register from './components/Register';

import styles from './index.module.scss';

function ContainerAuth({
  children, topText, topLink, linkTo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerIlustration}>
        <img className={styles.logo} src={logo} alt="Por los chicos" />
        <img className={styles.ilustration} src={ilustration} alt="Ilustracion" />
      </div>
      <div className={styles.containerForm}>
        <img className={styles.logoForm} src={logo} alt="Por los chicos" />

        { topText && (
          <p className={styles.topText}>
            { topText }
            <Link className={styles.link} to={linkTo}>{ topLink }</Link>
          </p>
        )}

        { children }

        { topText && (
          <p className={styles.topTextMobile}>
            { topText }
            <Link className={styles.link} to={linkTo}>{ topLink }</Link>
          </p>
        )}
      </div>
    </div>
  );
}

ContainerAuth.propTypes = {
  children: PropTypes.node.isRequired,
  topText: PropTypes.string,
  topLink: PropTypes.string,
  linkTo: PropTypes.string,
};

ContainerAuth.defaultProps = {
  topText: null,
  topLink: null,
  linkTo: null,
};

export default ContainerAuth;
