import React from 'react';

import { postUrlUserLogin } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { setUserData } from '../../utils/setUserData';
import { setCookie } from '../../utils/setCookie';

export const SEND_LOGIN = 'SEND_LOGIN';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';

export function setStartForLoginRequest() {
  return { type: SEND_LOGIN };
}

export function setFailedForLoginRequest(errorMessage) {
  return { type: GET_LOGIN_FAILED, errorMessage };
}

export function setSuccessForLoginRequest(userData, accessToken, refreshToken) {
  return { type: GET_LOGIN_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function loginUser(email, password) {
  return async function (dispatch) {
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
    } catch (error) {
      const alarm = error.message;
      dispatch(setFailedForLoginRequest(alarm));
      alert(alarm);
    }
  };
}
