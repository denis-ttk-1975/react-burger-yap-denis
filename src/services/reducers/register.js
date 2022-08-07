import { SEND_REGISTRATION, GET_REGISTRATION_FAILED, GET_REGISTRATION_SUCCESS } from './../actions/register';

const initialState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
};

export const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REGISTRATION: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_REGISTRATION_SUCCESS: {
      return {
        ...state,
        userInfo: action.user,
        isLoading: false,
      };
    }
    case GET_REGISTRATION_FAILED: {
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
