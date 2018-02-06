import React, { Component } from 'react';
import PropTypes from 'prop-types';
import binance from 'node-binance-api';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';
import AlertMessage from '../../components/AlertMessage';
import Header from '../../components/Header';
import HorizontalTabList from '../../components/HorizontalTabList';
import InfoPanel from '../../components/InfoPanel';
import InputPanel from '../../components/InputPanel';
import OptionPanel from '../../components/OptionPanel';
import Chart from '../../components/Chart';

export default class TradeHub extends Component {
  static propTypes = {
    opts: PropTypes.shape({
      binance: PropTypes.shape({
        key: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    cryptoList: [],
    selectedCrypto: { symbol: 'ETHBTC', baseAsset: 'ETH', quoteAsset: 'BTC' },
    quantity: 0,
    currentPrice: 0,
    boughtPrice: 0,
    diffPercentage: 0.01,
    highestPrice: 0,
    sellEnabled: false,
    sold: false,
    alert: { open: true, message: 'Welcome, happy trading!', color: 'primary' },
  };

  componentDidMount = () => {
    this.checkAPIKeys();
    binance.options({
      APIKEY: this.props.opts.binance.key,
      APISECRET: this.props.opts.binance.secret,
      reconnect: false,
      test: true,
    });

    this.getCryptoList();
    this.bindSocket(this.state.selectedCrypto.symbol);
  };

  onDismiss = () => {
    const alert = Object.assign({}, this.state.alert);
    alert.open = false;
    this.setState({ alert });
  };

  setAlert = (open, message, color) => {
    const alert = Object.assign({}, this.state.alert);
    alert.open = open;
    alert.message = message;
    alert.color = color;

    this.setState({
      alert,
    });
  };

  getPercentageChange = (oldNumber, newNumber) => {
    const decreaseValue = oldNumber - newNumber;
    return (decreaseValue / oldNumber) * 100;
  };

  getCryptoList = () => {
    fetch('https://api.binance.com/api/v1/exchangeInfo').then(res => res.json()).then((data) => {
      const cryptoList = data.symbols;
      if (cryptoList.length > 0) {
        this.setState({
          cryptoList,
          selectedCrypto: cryptoList[0],
        });
      }
    });
  };

  setBoughtPrice = price => this.setState({ boughtPrice: parseFloat(price) });

  setQuantity = quantity => this.setState({ quantity: parseFloat(quantity) });

  setDiffPercentage = percentage => this.setState({ diffPercentage: parseFloat(percentage) / 100 });

  setSellEnabled = value => this.setState({ sellEnabled: value });

  setHighestPrice = price => this.setState({ highestPrice: parseFloat(price) });

  isHighestPrice = price => price > this.state.highestPrice;

  shouldSell = (price) => {
    const { sellEnabled, sold, highestPrice, diffPercentage } = this.state;
    if (sellEnabled && !sold) {
      return price <= highestPrice - (highestPrice * diffPercentage);
    }
    return false;
  };

  checkPrice = (price) => {
    if (price < this.state.boughtPrice) return;

    if (this.isHighestPrice(price)) {
      this.setHighestPrice(price);
      return;
    }

    if (this.shouldSell(price)) this.sell(price);
  };

  sell = (price, retry = true) => {
    binance.marketSell(this.state.selectedCrypto.symbol, this.state.quantity, (error) => {
      if (error !== null) {
        if (retry) {
          this.sell(price, false);
        } else {
          this.setAlert(true, `The bot was unable to sell. ${error.toString()}.`, 'danger');
          this.setSellEnabled(false);
        }
      } else {
        const alertMessage = `Trading bot sold ${this.state.quantity} ${this.state.selectedCrypto.baseAsset}
                          at ${price} ${this.state.selectedCrypto.symbol}. Refresh the page for a new strategy.`;
        this.setAlert(true, alertMessage, 'success');
        this.setState({
          sold: true,
        });
      }
    });
  };

  changeSelectedCrypto = (symbol) => {
    const crypto = this.state.cryptoList.find(obj => obj.symbol === symbol);
    if (crypto === null) return;

    binance.prices((error, ticker) => {
      if (error !== null) {
        this.setAlert(true, `Could not change selected crypto. ${error.toString()}.`, 'danger');
        this.setState({
          alert,
        });
      } else {
        const currentPrice = parseFloat(ticker[crypto.symbol]);
        this.setState({
          currentPrice,
          sellEnabled: false,
          highestPrice: currentPrice,
        });
      }
    });

    this.setState({
      selectedCrypto: crypto,
    }, () => this.rebindSocket());
  };

  checkAPIKeys = () => {
    const { key, secret } = this.props.opts.binance;
    if (!key || !secret) {
      this.setAlert(true, 'API key/secret not defined. Take a look at the readme on how to add these and restart the server.', 'danger');
    }
  };

  bindSocket = (symbol) => {
    binance.websockets.candlesticks([symbol], '1m', (candlesticks) => {
      const { k: ticks } = candlesticks;
      const { c: close } = ticks;
      const currentPrice = parseFloat(close);

      this.setState({ currentPrice });
      this.checkPrice(currentPrice);
    });
  };

  removeSocket = endpoint => binance.websockets.terminate(endpoint);

  rebindSocket = () => {
    const newCrypto = this.state.selectedCrypto.symbol;
    const newEndpoint = `${newCrypto.toLowerCase()} @kline_1m`;
    const subscriptions = binance.websockets.subscriptions();

    Object.keys(subscriptions).forEach((endpoint) => {
      if (endpoint !== newEndpoint) this.removeSocket(endpoint);
    });

    this.bindSocket(newCrypto);
  };

  render = () => {
    const {
      sellEnabled,
      selectedCrypto,
      cryptoList,
      boughtPrice,
      quantity,
      currentPrice,
      highestPrice,
    } = this.state;

    const diffPercentage = this.state.diffPercentage * 100;
    const sellPrice = (highestPrice - (highestPrice * this.state.diffPercentage)).toFixed(6);

    const highestPriceChange = this.getPercentageChange(highestPrice, currentPrice).toFixed(2);
    const sellPriceChange = this.getPercentageChange(sellPrice, boughtPrice).toFixed(2);

    const sellOptions = [
      {
        label: 'Enable',
        value: true,
        color: 'success',
      },
      {
        label: 'Disable',
        value: false,
        color: 'danger',
      },
    ];

    return (
      <div>
        <Header />

        <Container>
          <AlertMessage {...this.state} onDismiss={this.onDismiss} />
          <HorizontalTabList
            list={cryptoList}
            selectedValue={this.state.selectedCrypto.symbol}
            changeSelected={this.changeSelectedCrypto}
          />
          <Row>
            <Col>
              <InputPanel
                name="quantity"
                value={quantity}
                step="0.01"
                onChange={this.setQuantity}
                title="Quantity"
                description={`How many ${selectedCrypto.baseAsset} you give the bot to sell.`}
                placeholder="Quantity"
              />
            </Col>
            <Col>
              <InputPanel
                name="bought_price"
                value={boughtPrice}
                step="0.01"
                onChange={this.setBoughtPrice}
                title="Bought"
                description={`Price in ${selectedCrypto.quoteAsset} at which you bought ${selectedCrypto.baseAsset}.`}
                placeholder="Bought price"
              />
            </Col>

            <Col>
              <InputPanel
                name="diffpercentage"
                value={diffPercentage}
                step="0.01"
                onChange={this.setDiffPercentage}
                title="Difference"
                description="% between highest price and sell price."
                placeholder="Difference %"
              />
            </Col>

            <Col>
              <OptionPanel
                options={sellOptions}
                value={sellEnabled}
                onChange={this.setSellEnabled}
                title="Bot strategy"
                description="Should the bot start trading? (note: only sells with profit)."
              />
            </Col>
          </Row>
        </Container>

        <Container className="mt-3">
          <Row>
            <Col><Chart symbol={this.state.selectedCrypto.symbol} /></Col>
          </Row>
        </Container>

        <Container className="mt-3">
          <Row>
            <Col>
              <InfoPanel
                title={` ${currentPrice} ${selectedCrypto.baseAsset}/${selectedCrypto.quoteAsset}`}
                description="Current price."
              />
            </Col>
            <Col>
              <InfoPanel
                title={`${highestPrice} ${selectedCrypto.baseAsset}/${selectedCrypto.quoteAsset}`}
                description="Highest price since bot is running."
                subtitle={`${highestPriceChange}%`}
                subtitleClass={highestPriceChange >= 0 ? 'text-success' : 'text-danger'}
              />
            </Col>
            <Col>
              <InfoPanel
                title={`${sellPrice} ${selectedCrypto.baseAsset}/${selectedCrypto.quoteAsset} `}
                description={`${sellPrice > boughtPrice ? 'Price at which the bot will sell' : 'Bot will not sell. Lower than bought price'}.`}
                subtitle={`${sellPriceChange}%`}
                subtitleClass={sellPriceChange >= 0 ? 'text-success' : 'text-danger'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}
