import React, {Component} from 'react'

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Home from './Home';
import TradeHub from './TradeHub';

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => (
            <Home opts={this.props.opts} />
          )}/>
          <Route exact path='/tradehub' render={(props) => (
            <TradeHub opts={this.props.opts} />
          )}/>
        </div>
      </Router>
    )
  }
}

export default Root;
