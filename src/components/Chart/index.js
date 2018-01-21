import React, { Component } from 'react';
import './styles.css';

// Bootstrap components
import { Card } from 'reactstrap';

// libraries
import TradingViewWidget from 'react-tradingview-widget';

class Chart extends Component {

  shouldComponentUpdate = (nextProps) => this.props.selectedCrypto !== nextProps.selectedCrypto

  render() {
    let symbol = "BINANCE:" + this.props.selectedCrypto.symbol;
    return (
      <Card id="chart">
        <TradingViewWidget
          symbol={symbol}
          autosize
        />
      </Card>
    );
  }
}

export default Chart;
