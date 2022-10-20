import { WS_OPEN, WS_CLOSE, WS_ERROR, WS_MESSAGE } from '../actions/websocket';

import { TWebsocketActions } from './../../services/actions/websocket';

type TWebsocketState = { connectionError: string; data: any };

const initialState: TWebsocketState = {
  connectionError: '',
  data: null,
};

export const wsReducer = (state = initialState, action: TWebsocketActions) => {
  switch (action.type) {
    case WS_OPEN: {
      return {
        ...state,

        connectionError: '',
      };
    }
    case WS_CLOSE: {
      return {
        ...state,
      };
    }
    case WS_ERROR: {
      return {
        ...state,
        connectionError: action.payload,
      };
    }
    case WS_MESSAGE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
