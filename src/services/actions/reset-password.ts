import { postUrlResetPassword } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { AppDispatch } from './../../services/types/types';

export const SEND_RESET_PASSWORD: 'SEND_RESET_PASSWORD' = 'SEND_RESET_PASSWORD';
export const GET_RESET_PASSWORD_FAILED: 'GET_RESET_PASSWORD_FAILED' = 'GET_RESET_PASSWORD_FAILED';
export const GET_RESET_PASSWORD_SUCCESS: 'GET_RESET_PASSWORD_SUCCESS' = 'GET_RESET_PASSWORD_SUCCESS';

export type TSendResetPassword = {
  readonly type: typeof SEND_RESET_PASSWORD;
};

export type TGetResetPasswordFailed = {
  readonly type: typeof GET_RESET_PASSWORD_FAILED;
  readonly errorMessage: string;
};

export type TGetResetPasswordSuccess = {
  readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
  readonly payload: { message: string };
};

export function setStartForResetPasswordRequest() {
  return { type: SEND_RESET_PASSWORD };
}

export function setFailedForResetPasswordRequest(errorMessage: string) {
  return { type: GET_RESET_PASSWORD_FAILED, errorMessage };
}

export function setSuccessForResetPasswordRequest(message: string) {
  return { type: GET_RESET_PASSWORD_SUCCESS, payload: { message: message } };
}

export function resetUserPassword(password: string, token: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForResetPasswordRequest());

      const res = await fetch(postUrlResetPassword, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: `${password}`,
          token: `${token}`,
        }),
      });

      const fullResponse = await checkResponse(res);

      dispatch(setSuccessForResetPasswordRequest(fullResponse.message));
      alert(fullResponse.message);
    } catch (error: any) {
      dispatch(setFailedForResetPasswordRequest(error.message));
    }
  };
}
