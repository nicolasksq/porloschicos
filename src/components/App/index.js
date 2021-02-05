import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthProvider } from 'context/AuthContext';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
// import UpdatePassword from 'screens/UpdatePassword';
import ForgotPassword from 'screens/ForgotPassword';
import PrivateTest from 'screens/PrivateTest';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/sign-up" component={SignUp} />
      <AuthProvider>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/private" component={PrivateTest} hasPermissions redirectTo="/login" />
      </AuthProvider>
    </Switch>
  );
}

export default App;
