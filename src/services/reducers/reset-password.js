import { SEND_RESET_PASSWORD, GET_RESET_PASSWORD_FAILED, GET_RESET_PASSWORD_SUCCESS } from './../actions/reset-password';

const initialState = {
  isLoading: false,
  errorMessage: '',
  message: {},
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_RESET_PASSWORD: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    }
    case GET_RESET_PASSWORD_FAILED: {
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
