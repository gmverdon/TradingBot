import React, { Component } from 'react';
import './styles.css';

// Bootstrap components
import { Card } from 'reactstrap';

class Chart extends Component {
  componentDidMount() {
    this.appendScript(this.initWidget);
  };

  appendScript(onload) {
    if (this.scriptExists()) {
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = 'widget-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  scriptExists() {
    document.getElementById('widget-script') !== null;
  }

  initWidget() {
    /* global TradingView */
    new TradingView.widget({
      container_id: 'widget-container',
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'Light',
      style: '1',
      locale: 'en',
      toolbar_bg: '#F1F3F6',
      enable_publishing: false,
      allow_symbol_change: true,
      hideideas: true
    });
  };

  render() {
    return (
      <Card id="widget-container">
        Loading widget...
      </Card>
    );
  }
}

export default Chart;
