import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './HOC/PrivateRoute';

import Login from './pages/Login'
import Home from './pages/Home'

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  </Router>
);

export default App;
