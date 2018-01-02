import React, { Component } from 'react';
import './styles.css';

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Home from '../../scenes/Home';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>
        </div>
      </Router>
    )
  }
}

export default Header;
