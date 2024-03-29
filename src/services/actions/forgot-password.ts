import { postUrlForgotPassword } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { AppDispatch } from './../../services/store';

export const SEND_FORGOT_PASSWORD: 'SEND_FORGOT_PASSWORD' = 'SEND_FORGOT_PASSWORD';
export const GET_FORGOT_PASSWORD_FAILED: 'GET_FORGOT_PASSWORD_FAILED' = 'GET_FORGOT_PASSWORD_FAILED';
export const GET_FORGOT_PASSWORD_SUCCESS: 'GET_FORGOT_PASSWORD_SUCCESS' = 'GET_FORGOT_PASSWORD_SUCCESS';

export type TSendForgotPassword = {
  readonly type: typeof SEND_FORGOT_PASSWORD;
};

export type TGetForgotPasswordFailed = {
  readonly type: typeof GET_FORGOT_PASSWORD_FAILED;
  readonly errorMessage: string;
};

export type TGetForgotPasswordSuccess = {
  readonly type: typeof GET_FORGOT_PASSWORD_SUCCESS;
  readonly payload: { message: string };
};

export type TForgotPasswordActions = TSendForgotPassword | TGetForgotPasswordFailed | TGetForgotPasswordSuccess;

export function setStartForForgotPasswordRequest() {
  return { type: SEND_FORGOT_PASSWORD };
}

export function setFailedForForgotPasswordRequest(errorMessage: string) {
  return { type: GET_FORGOT_PASSWORD_FAILED, errorMessage };
}

export function setSuccessForForgotPasswordRequest(message: string) {
  return { type: GET_FORGOT_PASSWORD_SUCCESS, payload: { message: message } };
}

export function sendForgotPasswordRequest(email: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForForgotPasswordRequest());

      const res = await fetch(postUrlForgotPassword, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
        }),
      });

      const fullResponse = await checkResponse(res);

      dispatch(setSuccessForForgotPasswordRequest(fullResponse.message));
      alert(fullResponse.message);
    } catch (error: any) {
      dispatch(setFailedForForgotPasswordRequest(error.message));
    }
  };
}
