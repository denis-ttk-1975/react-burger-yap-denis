import { WS_OPEN, WS_CLOSE, WS_ERROR, WS_MESSAGE } from './../actions/websocket';

const initialState = {
  connectionError: '',
  data: null,
};

export const wsReducer = (state = initialState, action) => {
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
