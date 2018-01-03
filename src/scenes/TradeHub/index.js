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
      currentPrice: 14800,
      boughtPrice: 14800,
      diffPercentage: 0.01,
      highestPrice: 0,
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
      self.checkPrice(close);
    });
  }

  checkPrice(currentPrice) {
    if (currentPrice > this.state.boughtPrice) {
      if (this.isHighestPrice(currentPrice)) {
        this.setHighestPrice(currentPrice);
        return;
      }

      if (this.shouldSell(currentPrice)) {
        this.sell(currentPrice);
        return;
      }
    }
  }
  
  isHighestPrice(currentPrice) {
    let isHighestPrice = currentPrice > this.state.highestPrice;
    return isHighestPrice;
  }

  setHighestPrice(currentPrice) {
    console.log("Previous highestPrice: " + this.state.highestPrice);
    this.setState({
      highestPrice: currentPrice
    })
    console.log("New highestPrice: " + this.state.highestPrice)
  }

  shouldSell(currentPrice) {
    let shouldSell = (currentPrice <= (this.state.highestPrice - this.state.highestPrice * this.state.diffPercentage));
    return shouldSell;
  }

  sell(currentPrice) {
    console.log("SOLD at " + currentPrice);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Current price: {this.state.currentPrice}</h1>
          <hr/>
          <h1>Bought at this price: {this.state.boughtPrice}</h1>
          <hr/>
          <h1>Highest price since bought: {this.state.highestPrice}</h1>
          <hr/>
          <h1>Will sell at: {(this.state.highestPrice - this.state.highestPrice * this.state.diffPercentage)} </h1>
          <p>(only when the price is higher then the boughtPrice). <br/>
            Difference between highestprice and sell price is {this.state.diffPercentage * 100}%</p>
        </div>
      </div>
    )
  }
}

export default TradeHub;
