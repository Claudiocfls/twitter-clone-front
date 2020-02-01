import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
