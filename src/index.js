import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './scenes/Home';
import registerServiceWorker from './services/registerServiceWorker';

const dotenv = require('dotenv').config()
const opts = {
  binance: {
    key:    process.env.REACT_APP_BINANCE_KEY,
    secret: process.env.REACT_APP_BINANCE_SECRET
  }
}


ReactDOM.render(<Home opts={opts} />, document.getElementById('root'));
registerServiceWorker();
