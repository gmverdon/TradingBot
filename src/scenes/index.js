import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home';
import TradeHub from './TradeHub';

export default class Root extends Component {
  render = () => (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Home opts={this.props.opts} />}
        />
        <Route
          exact
          path='/tradehub'
          render={(props) => <TradeHub opts={this.props.opts} />}
        />
        <Route render={(props) => <TradeHub opts={this.props.opts} />} />
      </Switch>
    </Router>
  )
};
