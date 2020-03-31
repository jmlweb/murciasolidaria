import React, { lazy, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./Dashboard'));
const Home = lazy(() => import('./Home'));
const RequestMaterial = lazy(() => import('./RequestMaterial'));

const Scenes = () => (
  <Router>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/request-material" component={RequestMaterial} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default memo(Scenes);
