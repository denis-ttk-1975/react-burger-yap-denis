import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import './index.css';
import './pages.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './services/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
