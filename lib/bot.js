const binance = require('node-binance-api');

module.exports = class Bot {

  constructor(opts) {
    this.boughtPrice = 15290;
    this.highestPrice = this.boughtPrice;
    this.diffPercentage = 0.01;

    binance.options({
      APIKEY:                     opts.binance.key,
      APISECRET:                  opts.binance.secret,
    })

    this.logPrices();
  }

  init() {
    var self = this;
    binance.websockets.candlesticks(['BTCUSDT'], "1m", function(candlesticks) {
    	let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
    	let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
    	//console.log(symbol+" "+interval+" candlestick update");
      self.checkPrice(close);
      console.log("");
    });
  }

  logPrices() {
    binance.prices(function(ticker) {
    	console.log("Price of BTC: ", ticker.BTCUSDT);
      console.log("");
    });
  }

  checkPrice(currentPrice) {
    if (currentPrice > this.boughtPrice) {
      if (this.isHighestPrice(currentPrice)) {
        this.setHighestPrice(currentPrice);
        return;
      }

      if (this.shouldSell(currentPrice)) {
        this.sell(currentPrice);
        return;
      }
    }

    console.log("currentPrice: " + currentPrice)
    console.log("will sell at: " + (this.highestPrice - this.highestPrice * this.diffPercentage));
  }

  isHighestPrice(currentPrice) {
    let isHighestPrice = currentPrice > this.highestPrice;
    return isHighestPrice;
  }

  setHighestPrice(currentPrice) {
    console.log("Previous highestPrice: " + this.highestPrice);
    this.highestPrice = currentPrice;
    console.log("New highestPrice: " + this.highestPrice)
  }

  shouldSell(currentPrice) {
    let shouldSell = (currentPrice <= (this.highestPrice - this.highestPrice * this.diffPercentage));
    return shouldSell;
  }

  sell(currentPrice) {
    console.log("SOLD at " + currentPrice);
  }

}
