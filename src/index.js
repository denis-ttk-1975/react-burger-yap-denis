import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import './index.css';
import './pages.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './services/store';
// import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './services/reducers/index';

//WebSocket middleware components upload

// import { wsAllOrdersInfo, wsUserOrdersInfo } from './utils/url';

// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

// export const store = createStore(rootReducer, enhancer);
console.log(77);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
