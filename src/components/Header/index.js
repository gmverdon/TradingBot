import React, { Component } from 'react';
import './styles.css';

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Home from '../scenes/Home';
import TradeHub from '../scenes/TradeHub';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>TradingMaster</h2>
          </div>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tradehub">TradeHub</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/tradehub" component={TradeHub}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default Header;
