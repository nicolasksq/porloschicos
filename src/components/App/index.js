import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from 'screens/SignUp';
import Login from 'screens/Login';
import UpdatePassword from 'screens/UpdatePassword';
import ForgotPassword from 'screens/ForgotPassword';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/test" component={UpdatePassword} />
    </Switch>
  );
}

export default App;
