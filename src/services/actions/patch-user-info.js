import { urlUserInfo } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';
import { fetchWithCheckJwt } from './../../utils/fetchWithCheckJwt';

import { setUserData } from './../../utils/setUserData';
import { setCookie } from './../../utils/setCookie';
import { getCookie } from './../../utils/getCookie';

import { updateTokenRequest } from './update-token';

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
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
    }),
  };

  return async function (dispatch) {
    try {
      dispatch(setStartForUpdateUserInfoRequest());

      const fullResponse = await fetchWithCheckJwt(urlUserInfo, options, checkResponse, getCookie('refreshToken'));

      await dispatch(setSuccessForUpdateUserInfoRequest(fullResponse.user));
      setUserData(fullResponse.user.name, fullResponse.user.email);
    } catch (error) {
      dispatch(setFailedForUpdateUserInfoRequest(error.message));
    }
  };
}
