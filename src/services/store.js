import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

//Feed WebSocket middleware components upload

import { feedPageSocketMiddleware } from './middleware/feed-page-socket-middleware';
import { orderHistorySocketMiddleware } from './middleware/order-history-socket-middleware';

import { FEED_CONNECT, FEED_DISCONNECT, wsFeedConnect, wsFeedClose, wsFeedError, wsFeedMessage, wsFeedOpen } from './actions/feed-page-socket';
import {
  ORDER_HISTORY_CONNECT,
  ORDER_HISTORY_DISCONNECT,
  wsOrderHistoryConnect,
  wsOrderHistoryClose,
  wsOrderHistoryError,
  wsOrderHistoryMessage,
  wsOrderHistoryOpen,
} from './actions/order-history-socket';

const wsFeedActions = {
  wsFeedConnect: FEED_CONNECT,
  wsFeedDisconnect: FEED_DISCONNECT,

  onConnect: wsFeedConnect,
  onOpen: wsFeedOpen,
  onClose: wsFeedClose,
  onError: wsFeedError,
  onMessage: wsFeedMessage,
};

const wsOrderHistoryActions = {
  wsOrderHistoryConnect: ORDER_HISTORY_CONNECT,
  wsOrderHistoryDisconnect: ORDER_HISTORY_DISCONNECT,

  onConnect: wsOrderHistoryConnect,
  onOpen: wsOrderHistoryOpen,
  onClose: wsOrderHistoryClose,
  onError: wsOrderHistoryError,
  onMessage: wsOrderHistoryMessage,
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, feedPageSocketMiddleware(wsFeedActions), orderHistorySocketMiddleware(wsOrderHistoryActions)));

export const store = createStore(rootReducer, enhancer);
