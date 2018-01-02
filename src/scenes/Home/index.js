import React, { Component } from 'react';
import './styles.css';
import Header from './components/Header';
import binance from 'binance-api';
import InfoPanel from '../../components/InfoPanel';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: 15290.99,
      boughtPrice: 15290.99,
      diffPercentage : 0.01,
      messages: []
    }

    binance.options({
      'APIKEY':      props.opts.binance.key,
      'APISECRET':   props.opts.binance.secret,
      'recvWindow': 60000
    })

    //this.logPrices();
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
      <InfoPanel currentPrice={this.state.currentPrice}/>
    )
  }
}

export default Home;
