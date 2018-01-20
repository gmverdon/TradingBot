import React, { Component } from 'react';
import './styles.css';

// Libraries
import binance from 'binance-api';

// Components
import Header from '../../components/Header';
import HorizontalTabList from '../../components/HorizontalTabList';
import InfoPanel from '../../components/InfoPanel';
import Chart from '../../components/Chart';

class TradeHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCrypto: "Bitcoin",
      currentPrice: 14800,
      boughtPrice: 14800,
      diffPercentage: 0.01,
      highestPrice: 0,
      messages: [],
      sellEnabled: false,
      hasSold: false
    }

    binance.options({
      'APIKEY':      props.opts.binance.key,
      'APISECRET':   props.opts.binance.secret,
      'recvWindow': 60000
    })

    // bindings
    this.setBoughtPrice = this.setBoughtPrice.bind(this);
    this.setDiffPercentage = this.setDiffPercentage.bind(this);
    this.toggleSellEnabled = this.toggleSellEnabled.bind(this);
  }

  componentDidMount() {
    var self = this;
    binance.websockets.candlesticks(['BTCUSDT'], "1m", function(candlesticks) {
      let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
      let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
      //console.log(symbol+" "+interval+" candlestick update");
      let currentPrice = parseFloat(close);

      self.setState({
        currentPrice: currentPrice
      })
      self.checkPrice(currentPrice);
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
    if (this.state.sellEnabled && !this.state.hasSold) {
      let shouldSell = (currentPrice <= (this.state.highestPrice - this.state.highestPrice * this.state.diffPercentage));
      return shouldSell;
    }
  }

  sell(currentPrice) {
    alert("SOLD at " + currentPrice);
    console.log("SOLD at " + currentPrice);
    this.setState({
      hasSold: true
    })
  }

  setBoughtPrice(e) {
    this.setState({
      boughtPrice: e.target.value
    })
  }

  setDiffPercentage(e) {
    let diffPercentage = (e.target.value / 100);
    this.setState({
      diffPercentage: diffPercentage
    })
  }

  toggleSellEnabled() {
    this.setState({
      sellEnabled: !this.state.sellEnabled
    })
  }

  render() {
    let selectedCrypto = this.state.selectedCrypto;
    let currentPrice = this.state.currentPrice.toFixed(2);
    let highestPrice = this.state.highestPrice.toFixed(2);;
    let sellPrice = (highestPrice - highestPrice * this.state.diffPercentage).toFixed(2);

    return (
      <div>
        <Header />

        <div className="container">
          <HorizontalTabList selectedCrypto={this.state.selectedCrypto}/>
          <div className="row">
            <div className="col-sm"><InfoPanel title={"$ " + currentPrice} description={selectedCrypto + " current price"}/></div>
            <div className="col-sm"><InfoPanel title={"$ " + highestPrice} description={selectedCrypto + " hightest price since bought"}/></div>
            <div className="col-sm"><InfoPanel title={"$ " + sellPrice} description={selectedCrypto + " price to sell on"}/></div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-sm"><Chart /></div>
          </div>
        </div>

        <div>
          <h1>Current price: {this.state.currentPrice}</h1>
          <hr/>
          <h1>Bought at this price:</h1>
          <input
            type="number"
            step="0.01"
            placeholder="Price at which you bought."
            onChange={this.setBoughtPrice}
            value={this.state.boughtPrice}/>
          <hr/>
          <h1>Highest price since bought: {this.state.highestPrice}</h1>
          <hr/>
          <h1>Will sell at: {(this.state.highestPrice - this.state.highestPrice * this.state.diffPercentage)} </h1>
          <p>(only when the price is higher then the boughtPrice). <br/>
            Difference between highestprice and sell price is {(this.state.diffPercentage * 100).toFixed(2)}%</p>
            <input
              type="number"
              step="0.01"
              placeholder="Difference between highestprice and sell price."
              onChange={this.setDiffPercentage}
              value={(this.state.diffPercentage * 100).toFixed(2)}/>
          <hr/>
          <p>Can sell (if enabled, the bot will sell at {(this.state.highestPrice - this.state.highestPrice * this.state.diffPercentage)})</p>
          <input
            type="checkbox"
            onChange={this.toggleSellEnabled}
            checked={this.state.sellEnabled}/>
          <hr/>
          <h1>Sold: {this.state.hasSold.toString()}</h1>
        </div>
      </div>
    )
  }
}

export default TradeHub;
