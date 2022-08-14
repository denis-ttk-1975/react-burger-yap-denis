import { SEND_USER_INFO_REQUEST, GET_USER_INFO_REQUEST_FAILED, GET_USER_INFO_REQUEST_SUCCESS } from './../actions/get-user-info';

const initialState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
};

export const getUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_INFO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_USER_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.user,

        isLoading: false,
      };
    }
    case GET_USER_INFO_REQUEST_FAILED: {
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
