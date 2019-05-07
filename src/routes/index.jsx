import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/container/Homepage';
import Login from '../components/container/Login';
import Signup from '../components/container/Signup';
import Footer from '../components/presentational/Footer';
import RedFlags from '../components/container/RedFlags';
import Interventions from '../components/container/Interventions';
import RedFlag from '../components/container/RedFlag';
import CreateRedFlag from '../components/container/CreateRedFlag';
import CreateIntervention from '../components/container/CreateIntervention';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */

function Routes() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/redflag/:id" component={RedFlag} exact />
          <Route path="/redflags" component={RedFlags} exact />
          <Route path="/interventions" component={Interventions} exact />
          <Route path="/create-redflag" component={CreateRedFlag} exact />
          <Route path="/create-intervention" component={CreateIntervention} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
