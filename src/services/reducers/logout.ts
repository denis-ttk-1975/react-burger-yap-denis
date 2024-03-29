import { SEND_LOGOUT, GET_LOGOUT_FAILED, GET_LOGOUT_SUCCESS } from '../actions/logout';

import { TLogoutActions } from './../../services/actions/logout';

type TLogoutState = { isLoading: boolean; errorMessage: string };

const initialState: TLogoutState = {
  isLoading: false,
  errorMessage: '',
};

export const userLogoutReducer = (state = initialState, action: TLogoutActions) => {
  switch (action.type) {
    case SEND_LOGOUT: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_LOGOUT_FAILED: {
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
