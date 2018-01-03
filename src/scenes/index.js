import React, {Component} from 'react'

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Home from './Home';
import TradeHub from './TradeHub';

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    )
  }
}

export default Root;
