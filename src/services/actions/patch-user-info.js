import { urlUserInfo } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

import { setUserData } from './../../utils/setUserData';
import { setCookie } from './../../utils/setCookie';

export const SEND_UPDATE_USER_INFO = 'SEND_UPDATE_USER_INFO';
export const GET_UPDATE_USER_INFO_FAILED = 'GET_UPDATE_USER_INFO_FAILED';
export const GET_UPDATE_USER_INFO_SUCCESS = 'GET_UPDATE_USER_INFO_SUCCESS';

export function setStartForUpdateUserInfoRequest() {
  return { type: SEND_UPDATE_USER_INFO };
}

export function setFailedForUpdateUserInfoRequest(errorMessage) {
  return { type: GET_UPDATE_USER_INFO_FAILED, errorMessage };
}

export function setSuccessForUpdateUserInfoRequest(userData, accessToken, refreshToken) {
  return { type: GET_UPDATE_USER_INFO_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function updateUserInfo(name, email, password) {
  return async function (dispatch) {
    try {
      dispatch(setStartForUpdateUserInfoRequest());

      const res = await fetch(urlUserInfo, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
          name: `${name}`,
        }),
      });
      checkResponse(res);
      const fullResponse = await res.json();

      await dispatch(setSuccessForUpdateUserInfoRequest(fullResponse.user, fullResponse.accessToken, fullResponse.refreshToken));
      setUserData(fullResponse.user.name, fullResponse.user.email, password);
      setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1]);
      setCookie('refreshToken', fullResponse.refreshToken);
    } catch (error) {
      dispatch(setFailedForUpdateUserInfoRequest(error.message));
    }
  };
}
