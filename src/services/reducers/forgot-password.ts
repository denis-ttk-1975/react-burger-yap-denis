import { SEND_FORGOT_PASSWORD, GET_FORGOT_PASSWORD_FAILED, GET_FORGOT_PASSWORD_SUCCESS } from '../actions/forgot-password';

import { TIngredientElement } from '../types/types';
import { TForgotPasswordActions } from '../actions/forgot-password';

type TBurgerIngredientsState = { isLoading: boolean; errorMessage: string; message: string };

const initialState: TBurgerIngredientsState = {
  isLoading: false,
  errorMessage: '',
  message: '',
};

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions) => {
  switch (action.type) {
    case SEND_FORGOT_PASSWORD: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
      };
    }
    case GET_FORGOT_PASSWORD_FAILED: {
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
