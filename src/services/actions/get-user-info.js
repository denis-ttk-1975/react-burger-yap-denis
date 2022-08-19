import { urlUserInfo } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';
import { fetchWithCheckJwt } from './../../utils/fetchWithCheckJwt';

import { setUserData } from './../../utils/setUserData';
import { setCookie } from './../../utils/setCookie';
import { getCookie } from './../../utils/getCookie';

export const SEND_USER_INFO_REQUEST = 'SEND_USER_INFO_REQUEST';
export const GET_USER_INFO_REQUEST_FAILED = 'GET_USER_INFO_REQUEST_FAILED';
export const GET_USER_INFO_REQUEST_SUCCESS = 'GET_USER_INFO_REQUEST_SUCCESS';

export function setStartForUserInfoRequest() {
  return { type: SEND_USER_INFO_REQUEST };
}

export function setFailedForUserInfoRequest(errorMessage) {
  return { type: GET_USER_INFO_REQUEST_FAILED, errorMessage };
}

export function setSuccessForUserInfoRequest(userData, accessToken, refreshToken) {
  return { type: GET_USER_INFO_REQUEST_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function requestForUserInfo() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  };

  return async function (dispatch) {
    try {
      dispatch(setStartForUserInfoRequest());

      const fullResponse = await fetchWithCheckJwt(urlUserInfo, options, checkResponse, getCookie('refreshToken'));

      await dispatch(setSuccessForUserInfoRequest(fullResponse.user));
      setUserData(fullResponse.user.name, fullResponse.user.email);
    } catch (error) {
      dispatch(setFailedForUserInfoRequest(error.message));
    }
  };
}
