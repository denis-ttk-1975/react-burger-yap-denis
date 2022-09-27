import { postUrlUserLogout } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { clearUserData } from '../../utils/clearUserData';
import { setCookie } from '../../utils/setCookie';

import { AppDispatch } from './../../services/types/types';

export const SEND_LOGOUT: 'SEND_LOGOUT' = 'SEND_LOGOUT';
export const GET_LOGOUT_FAILED: 'GET_LOGOUT_FAILED' = 'GET_LOGOUT_FAILED';
export const GET_LOGOUT_SUCCESS: 'GET_LOGOUT_SUCCESS' = 'GET_LOGOUT_SUCCESS';

export type TSendLogout = {
  readonly type: typeof SEND_LOGOUT;
};

export type TGetLogoutFailed = {
  readonly type: typeof GET_LOGOUT_FAILED;
  readonly errorMessage: string;
};

export type TGetLogoutSuccess = {
  readonly type: typeof GET_LOGOUT_SUCCESS;
  readonly payload: { message: string };
};

export function setStartForLogoutRequest() {
  return { type: SEND_LOGOUT };
}

export function setFailedForLogoutRequest(errorMessage: string) {
  return { type: GET_LOGOUT_FAILED, errorMessage };
}

export function setSuccessForLogoutRequest() {
  return { type: GET_LOGOUT_SUCCESS };
}

export function logoutUser(refreshToken: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForLogoutRequest());

      const res = await fetch(postUrlUserLogout, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: `${refreshToken}`,
        }),
      });

      const fullResponse = await checkResponse(res);
      await dispatch(setSuccessForLogoutRequest());
      alert(fullResponse.message);

      clearUserData();
      setCookie('accessToken', '', {
        'max-age': -1,
        path: '/',
      });
      setCookie('refreshToken', '', {
        'max-age': -1,
        path: '/',
      });
    } catch (error: any) {
      dispatch(setFailedForLogoutRequest(error.message));
    }
  };
}
