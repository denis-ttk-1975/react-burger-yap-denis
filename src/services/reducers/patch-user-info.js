import { SEND_UPDATE_USER_INFO, GET_UPDATE_USER_INFO_FAILED, GET_UPDATE_USER_INFO_SUCCESS } from './../actions/patch-user-info';

const initialState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
  accessToken: null,
  refreshToken: null,
};

export const userUpdateInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_UPDATE_USER_INFO: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_UPDATE_USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
      };
    }
    case GET_UPDATE_USER_INFO_FAILED: {
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
