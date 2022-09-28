import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';

//WebSocket middleware components upload

import { websocketMiddleware } from './middleware/websocket-middleware';

import { CONNECT, DISCONNECT, wsConnect, wsClose, wsError, wsMessage, wsOpen } from './actions/websocket';

import { TApplicationActions, AppDispatch } from './../services/types/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const wsActions = {
  wsConnect: CONNECT,
  wsDisconnect: DISCONNECT,

  onConnect: wsConnect,
  onOpen: wsOpen,
  onClose: wsClose,
  onError: wsError,
  onMessage: wsMessage,
};

// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, websocketMiddleware(wsActions)));

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, enhancer);
