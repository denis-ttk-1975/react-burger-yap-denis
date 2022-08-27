import { FEED_WS_OPEN, FEED_WS_CLOSE, FEED_WS_ERROR, FEED_WS_MESSAGE } from './../actions/feed-page-socket';

const initialState = {
  connectionError: '',
  table: null,
};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEED_WS_OPEN: {
      return {
        ...state,

        connectionError: '',
      };
    }
    case FEED_WS_CLOSE: {
      return {
        ...state,
      };
    }
    case FEED_WS_ERROR: {
      return {
        ...state,
        connectionError: action.payload,
      };
    }
    case FEED_WS_MESSAGE: {
      return {
        ...state,
        table: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
