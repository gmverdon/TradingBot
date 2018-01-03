import React, {Component} from 'react'

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Home from './Home';

class Root extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' render={(props) => (
            <Home opts={this.props.opts} />
          )}/>
      </Router>
    )
  }
}

export default Root;
