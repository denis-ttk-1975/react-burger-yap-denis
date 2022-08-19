import { SEND_UPDATE_TOKEN, GET_UPDATE_TOKEN_FAILED, GET_UPDATE_TOKEN_SUCCESS } from '../actions/update-token';

const initialState = {
  isLoading: false,
  errorMessage: '',

  accessToken: null,
  refreshToken: null,
};

export const updateTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_UPDATE_TOKEN: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,

        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
      };
    }
    case GET_UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
