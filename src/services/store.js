import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

//Feed WebSocket middleware components upload

import { feedPageSocketMiddleware } from './middleware/feed-page-socket-middleware';

import { wsAllOrdersInfo, wsUserOrdersInfo } from './../utils/url';
import { FEED_CONNECT, FEED_DISCONNECT, wsFeedConnect, wsFeedClose, wsFeedError, wsFeedMessage, wsFeedOpen } from './actions/feed-page-socket';

const wsFeedActions = {
  wsFeedConnect: FEED_CONNECT,
  wsFeedDisconnect: FEED_DISCONNECT,

  onConnect: wsFeedConnect,
  onOpen: wsFeedOpen,
  onClose: wsFeedClose,
  onError: wsFeedError,
  onMessage: wsFeedMessage,
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, feedPageSocketMiddleware(wsFeedActions)));

export const store = createStore(rootReducer, enhancer);
