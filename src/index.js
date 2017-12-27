import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './scenes/Home';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
