import { FEED_WS_OPEN, FEED_WS_CLOSE, FEED_WS_ERROR, FEED_WS_MESSAGE } from './../actions/feed-page-socket';

const initialState = {
  connectionError: '',
  data: null,
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
        connectionError: '',
        data: null,
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
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
