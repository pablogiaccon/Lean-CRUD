import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default routes;
