import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import TradingViewWidget from 'react-tradingview-widget';
import './styles.css';

const Chart = ({ symbol }) => (
  <Card id="chart">
    <TradingViewWidget
      symbol={`BINANCE:${symbol}`}
      autosize
    />
  </Card>
);

Chart.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Chart;
