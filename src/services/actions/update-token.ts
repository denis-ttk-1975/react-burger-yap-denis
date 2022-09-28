import { postUrlUserTokenUpdate } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { setCookie } from '../../utils/setCookie';

import { AppDispatch } from './../../services/types/types';

export const SEND_UPDATE_TOKEN: 'SEND_UPDATE_TOKEN' = 'SEND_UPDATE_TOKEN';
export const GET_UPDATE_TOKEN_FAILED: 'GET_UPDATE_TOKEN_FAILED' = 'GET_UPDATE_TOKEN_FAILED';
export const GET_UPDATE_TOKEN_SUCCESS: 'GET_UPDATE_TOKEN_SUCCESS' = 'GET_UPDATE_TOKEN_SUCCESS';

export type TSendUpdateToken = {
  readonly type: typeof SEND_UPDATE_TOKEN;
};

export type TGetUpdateTokenFailed = {
  readonly type: typeof GET_UPDATE_TOKEN_FAILED;
  readonly errorMessage: string;
};

export type TGetUpdateTokenSuccess = {
  readonly type: typeof GET_UPDATE_TOKEN_SUCCESS;
  readonly payload: { accessToken: string; refreshToken: string };
};

export type TUpdateTokenActions = TSendUpdateToken | TGetUpdateTokenFailed | TGetUpdateTokenSuccess;

export function setStartForUpdateTokenRequest() {
  return { type: SEND_UPDATE_TOKEN };
}

export function setFailedForUpdateTokenRequest(errorMessage: string) {
  return { type: GET_UPDATE_TOKEN_FAILED, errorMessage };
}

export function setSuccessForUpdateTokenRequest(accessToken: string, refreshToken: string) {
  return { type: GET_UPDATE_TOKEN_SUCCESS, payload: { accessToken: accessToken, refreshToken: refreshToken } };
}

export function updateTokenRequest(refreshToken: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForUpdateTokenRequest());

      const res = await fetch(postUrlUserTokenUpdate, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: `${refreshToken}`,
        }),
      });

      const fullResponse = await checkResponse(res);

      await dispatch(setSuccessForUpdateTokenRequest(fullResponse.accessToken, fullResponse.refreshToken));
      setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });
      setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
    } catch (error: any) {
      dispatch(setFailedForUpdateTokenRequest(error.message));
      Promise.reject(error.message);
    }
  };
}
