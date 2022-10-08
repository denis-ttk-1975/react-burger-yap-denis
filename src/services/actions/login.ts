import { postUrlUserLogin } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { setUserData } from '../../utils/setUserData';
import { setCookie } from '../../utils/setCookie';

import { AppDispatch } from './../../services/store';

export const SEND_LOGIN: 'SEND_LOGIN' = 'SEND_LOGIN';
export const GET_LOGIN_FAILED: 'GET_LOGIN_FAILED' = 'GET_LOGIN_FAILED';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';

export type TSendLogin = {
  readonly type: typeof SEND_LOGIN;
};

export type TGetLoginFailed = {
  readonly type: typeof GET_LOGIN_FAILED;
  readonly errorMessage: string;
};

export type TGetLoginSuccess = {
  readonly type: typeof GET_LOGIN_SUCCESS;
  readonly payload: { user: { name: string; email: string }; accessToken: string; refreshToken: string };
};

export type TLoginActions = TSendLogin | TGetLoginFailed | TGetLoginSuccess;

export function setStartForLoginRequest(): TSendLogin {
  return { type: SEND_LOGIN };
}

export function setFailedForLoginRequest(errorMessage: string): TGetLoginFailed {
  return { type: GET_LOGIN_FAILED, errorMessage };
}

export function setSuccessForLoginRequest(userData: { name: string; email: string }, accessToken: string, refreshToken: string): TGetLoginSuccess {
  return { type: GET_LOGIN_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function loginUser(email: string, password: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForLoginRequest());

      const res = await fetch(postUrlUserLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
        }),
      });

      const fullResponse = await checkResponse(res);
      await dispatch(setSuccessForLoginRequest(fullResponse.user, fullResponse.accessToken, fullResponse.refreshToken));
      setUserData(fullResponse.user.name, fullResponse.user.email);
      setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });
      setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
    } catch (error: any) {
      const alarm = error.message;
      dispatch(setFailedForLoginRequest(alarm));
      alert(alarm);
    }
  };
}
