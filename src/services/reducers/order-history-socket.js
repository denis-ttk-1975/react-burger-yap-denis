import { ORDER_HISTORY_WS_OPEN, ORDER_HISTORY_WS_CLOSE, ORDER_HISTORY_WS_ERROR, ORDER_HISTORY_WS_MESSAGE } from './../actions/order-history-socket';

const initialState = {
  connectionError: '',
  data: null,
};

export const orderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_HISTORY_WS_OPEN: {
      return {
        ...state,

        connectionError: '',
      };
    }
    case ORDER_HISTORY_WS_CLOSE: {
      return {
        ...state,

        connectionError: '',
      };
    }
    case ORDER_HISTORY_WS_ERROR: {
      return {
        ...state,
        connectionError: action.payload,
      };
    }
    case ORDER_HISTORY_WS_MESSAGE: {
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
