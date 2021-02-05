import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validateTokenService } from 'services/authService';

import { AuthContext } from 'context/AuthContext';

import Loader from 'components/Loader';

export default function PrivateTest(props) {
  const [{ token }, setDataAuth] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validate = async () => {
      try {
        const res = await validateTokenService(token);
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        localStorage.removeItem('token');
        setDataAuth({ token: '', role: '' });
        props.history.goBack();
      }
    };

    validate();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <h1>Private</h1>;
}

PrivateTest.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
