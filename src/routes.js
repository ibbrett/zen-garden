import React from 'react';
import HomeView from './pages/HomeView';
import ProfileView from './pages/ProfileView';
import DetailView from './pages/DetailView';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/profile" component={ProfileView} />
    <Route path="/detail/:index" component={DetailView} />
    </Switch>
  );
}

export default Routes;
