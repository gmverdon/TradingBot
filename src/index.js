import React from 'react';
import ReactDOM from 'react-dom';

// Libraries
import registerServiceWorker from './services/registerServiceWorker';

// Styles
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import Root from './scenes';

const dotenv = require('dotenv').config();
const opts = {
  binance: {
    key:    process.env.REACT_APP_BINANCE_KEY,
    secret: process.env.REACT_APP_BINANCE_SECRET
  }
}

ReactDOM.render(<Root opts={opts} />, document.getElementById('root'));
registerServiceWorker();
