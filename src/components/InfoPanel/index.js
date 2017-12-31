import React, { Component } from 'react';
import './styles.css';

class InfoPanel extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>€ 460,63</h2>
        </div>
        <div>
          <div>
            <img></img>
            <h4>Ethereum</h4>
          </div>
          <div>
            <h4>
              <i>Bought price</i>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoPanel;
