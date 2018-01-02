import React, { Component } from 'react';
import './styles.css';

class InfoPanel extends Component {

  render() {
    return (
      <div className="row">
      
        <div className="panel">
          <div className="panelContent">
            <h2>€ 14989.17</h2>
          </div>
          <div className="panelFooter">
            <h4>
              <i class="fab fa-ethereum"></i> Ethereum
            </h4>
            <h4>
              <i>Current price</i>
            </h4>
          </div>
        </div>

        <div className="panel">
          <div className="panelContent">
            <h2>€ 14869.45</h2>
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
      
      
      <div className="panel">
          <div className="panelContent profit">
            <h2>€ 119.72</h2>
          </div>
          <div className="panelFooter">
            <h4>
              <i class="fab fa-ethereum"></i> Ethereum
            </h4>
            <h4>
              <i>Profit/lost</i>
            </h4>
          </div>
          </div>
      
      </div>
    )
  }
}

export default InfoPanel;
