import React, { Component } from 'react';
import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Current price: {this.state.currentPrice}</h1>
    )
  }
}

export default Header;
