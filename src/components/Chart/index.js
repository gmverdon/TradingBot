import React, { Component } from 'react';
import './styles.css';

// Bootstrap components
import { Card } from 'reactstrap';

// libraries
import TradingViewWidget from 'react-tradingview-widget';

class Chart extends Component {
  render() {
    return (
      <Card>
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          autosize
        />
      </Card>
    );
  }
}

export default Chart;
