import { postUrlUserTokenUpdate } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { setCookie } from '../../utils/setCookie';

export const SEND_UPDATE_TOKEN = 'SEND_UPDATE_TOKEN';
export const GET_UPDATE_TOKEN_FAILED = 'GET_UPDATE_TOKEN_FAILED';
export const GET_UPDATE_TOKEN_SUCCESS = 'GET_UPDATE_TOKEN_SUCCESS';

export function setStartForUpdateTokenRequest() {
  return { type: SEND_UPDATE_TOKEN };
}

export function setFailedForUpdateTokenRequest(errorMessage) {
  return { type: GET_UPDATE_TOKEN_FAILED, errorMessage };
}

export function setSuccessForUpdateTokenRequest(userData, accessToken, refreshToken) {
  return { type: GET_UPDATE_TOKEN_SUCCESS, payload: { accessToken: accessToken, refreshToken: refreshToken } };
}

export function updateTokenRequest(refreshToken) {
  return async function (dispatch) {
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
      await checkResponse(res);
      const fullResponse = await res.json();

      await dispatch(setSuccessForUpdateTokenRequest(fullResponse.accessToken, fullResponse.refreshToken));
      setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1]);
      setCookie('refreshToken', fullResponse.refreshToken);
    } catch (error) {
      dispatch(setFailedForUpdateTokenRequest(error.message));
      Promise.reject(error.message);
    }
  };
}
