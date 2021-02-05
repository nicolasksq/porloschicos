import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './AuthContext';

export default function AuthProvider({ children }) {
  const initialState = {
    token: localStorage.getItem('token') || '',
    role: '',
  };

  const [dataAuth, setDataAuth] = useState(initialState);

  return (
    <AuthContext.Provider value={[dataAuth, setDataAuth]}>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
