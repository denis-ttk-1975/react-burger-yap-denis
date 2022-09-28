import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

//WebSocket middleware components upload

import { websocketMiddleware } from './middleware/websocket-middleware';

import { CONNECT, DISCONNECT, wsConnect, wsClose, wsError, wsMessage, wsOpen } from './actions/websocket';

import { TApplicationActions } from './../services/types/types';

const wsActions = {
  wsConnect: CONNECT,
  wsDisconnect: DISCONNECT,

  onConnect: wsConnect,
  onOpen: wsOpen,
  onClose: wsClose,
  onError: wsError,
  onMessage: wsMessage,
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, websocketMiddleware(wsActions)));

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, enhancer);
