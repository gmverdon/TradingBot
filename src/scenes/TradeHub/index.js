import React, { Component } from 'react';
import './styles.css';

// Libraries
import binance from 'binance-api';

// Components
import Header from '../../components/Header';

class TradeHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: 15290,
      boughtPrice: 15290,
      diffPercentage : 0.01,
      messages: []
    }

    binance.options({
      'APIKEY':      props.opts.binance.key,
      'APISECRET':   props.opts.binance.secret,
      'recvWindow': 60000
    })
  }

  componentDidMount() {
    var self = this;
    binance.websockets.candlesticks(['BTCUSDT'], "1m", function(candlesticks) {
      let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
      let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
      //console.log(symbol+" "+interval+" candlestick update");
      self.setState({
        currentPrice: close
      })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Current price: {this.state.currentPrice}</h1>
        </div>
      </div>
    )
  }
}

export default TradeHub;
