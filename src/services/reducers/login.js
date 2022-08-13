import { SEND_LOGIN, GET_LOGIN_FAILED, GET_LOGIN_SUCCESS } from './../actions/login';

const initialState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
  accessToken: null,
  refreshToken: null,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LOGIN: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
      };
    }
    case GET_LOGIN_FAILED: {
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
