import React, { Component } from 'react';
import './styles.css';

// Libraries
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tradehub">TradeHub</Link></li>
        </ul>
        <hr/>
      </div>
    )
  }
}

export default Header;
