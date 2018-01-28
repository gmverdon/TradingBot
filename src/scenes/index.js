import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import TradeHub from './TradeHub';

const Root = ({ opts }) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home {...props} opts={opts} />}
      />
      <Route
        exact
        path="/tradehub"
        render={props => <TradeHub {...props} opts={opts} />}
      />
      <Route render={props => <TradeHub {...props} opts={opts} />} />
    </Switch>
  </Router>
);

Root.propTypes = {
  opts: PropTypes.shape({
    binance: PropTypes.shape({
      key: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Root;
