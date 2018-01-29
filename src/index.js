import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './services/registerServiceWorker';
import './styles.css';
import Root from './scenes';

dotenv.config();
const opts = {
  binance: {
    key: process.env.REACT_APP_BINANCE_KEY,
    secret: process.env.REACT_APP_BINANCE_SECRET,
  },
};

ReactDOM.render(<Root opts={opts} />, document.getElementById('root'));
registerServiceWorker();
