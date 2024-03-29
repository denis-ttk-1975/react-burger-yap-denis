import { SEND_UPDATE_USER_INFO, GET_UPDATE_USER_INFO_FAILED, GET_UPDATE_USER_INFO_SUCCESS } from '../actions/patch-user-info';

import { TPatchUserInfoActions } from './../../services/actions/patch-user-info';

type TPatchUserInfoState = { isLoading: boolean; errorMessage: string; userInfo: { [key: string]: string } };

const initialState: TPatchUserInfoState = {
  isLoading: false,
  errorMessage: '',
  userInfo: {},
};

export const userUpdateInfoReducer = (state = initialState, action: TPatchUserInfoActions) => {
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
