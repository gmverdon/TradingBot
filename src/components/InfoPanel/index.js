import React, { Component } from 'react';
import './styles.css';

class InfoPanel extends Component {

  render() {
    return (
      <div className="panel">
        <div className="panelContent">
          <h2>€ {this.props.currentPrice}</h2>
        </div>
        <div className="panelFooter">
          <h4>
            <i class="fab fa-ethereum"></i> Ethereum
          </h4>
          <h4>
            <i>Bought price</i>
          </h4>
        </div>
      </div>
    )
  }
}

export default InfoPanel;
