import { postUrlUserLogin } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

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
      checkResponse(res);
      const fullResponse = await res.json();

      dispatch(setSuccessForLoginRequest(fullResponse.user, fullResponse.accessToken, fullResponse.refreshToken));
    } catch (error) {
      dispatch(setFailedForLoginRequest(error.message));
    }
  };
}
