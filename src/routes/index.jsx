import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/container/Homepage';
import Login from '../components/presentational/Login';
import Signup from '../components/presentational/Signup';
import Navbar from '../components/presentational/Navbar';
import Footer from '../components/presentational/Footer';
import RedFlags from '../components/container/RedFlags';
import Interventions from '../components/container/Interventions';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */

function Routes() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/redflags" component={RedFlags} exact />
          <Route path="/interventions" component={Interventions} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
