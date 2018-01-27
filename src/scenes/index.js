import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home';
import TradeHub from './TradeHub';

const Root = ({ opts }) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home opts={opts} />}
      />
      <Route
        exact
        path="/tradehub"
        render={props => <TradeHub opts={opts} />}
      />
      <Route render={props => <TradeHub opts={opts} />} />
    </Switch>
  </Router>
);

export default Root;
