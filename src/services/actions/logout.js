import { postUrlUserLogout } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

import { clearUserData } from './../../utils/clearUserData';
import { setCookie } from './../../utils/setCookie';

export const SEND_LOGOUT = 'SEND_LOGOUT';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';

export function setStartForLogoutRequest() {
  return { type: SEND_LOGOUT };
}

export function setFailedForLogoutRequest(errorMessage) {
  return { type: GET_LOGOUT_FAILED, errorMessage };
}

export function setSuccessForLogoutRequest() {
  return { type: GET_LOGOUT_SUCCESS };
}

export function logoutUser(refreshToken) {
  return async function (dispatch) {
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
      });
      setCookie('refreshToken', '', {
        'max-age': -1,
      });
    } catch (error) {
      dispatch(setFailedForLogoutRequest(error.message));
    }
  };
}
