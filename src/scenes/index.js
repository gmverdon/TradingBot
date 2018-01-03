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

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
            <Route exact path='/' render={(props) => (
              <Home opts={this.props.opts} />
            )}/>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default Root;
