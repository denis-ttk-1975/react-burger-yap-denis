import { SEND_REGISTRATION, GET_REGISTRATION_FAILED, GET_REGISTRATION_SUCCESS } from '../actions/register';

import { TRegisterActions } from './../../services/actions/register';

type TRegisterState = { isLoading: boolean; errorMessage: string; userInfo: { [key: string]: string }; accessToken: string | null; refreshToken: string | null };

const initialState: TRegisterState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
  accessToken: null,
  refreshToken: null,
};

export const userRegistrationReducer = (state = initialState, action: TRegisterActions) => {
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
        userInfo: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
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
