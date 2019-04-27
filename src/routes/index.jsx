import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/container/Homepage.jsx';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */

function Routes() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </>
    </BrowserRouter>
  )
}

export default Routes;
