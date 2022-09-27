import { urlUserInfo } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';
import { fetchWithCheckJwt } from '../../utils/fetchWithCheckJwt';

import { setUserData } from '../../utils/setUserData';
import { getCookie } from '../../utils/getCookie';

import { AppDispatch } from './../../services/types/types';

export const SEND_USER_INFO_REQUEST = 'SEND_USER_INFO_REQUEST';
export const GET_USER_INFO_REQUEST_FAILED = 'GET_USER_INFO_REQUEST_FAILED';
export const GET_USER_INFO_REQUEST_SUCCESS = 'GET_USER_INFO_REQUEST_SUCCESS';

export type TSendUserInfoRequest = {
  readonly type: typeof SEND_USER_INFO_REQUEST;
};

export type TGetUserInfoRequestFailed = {
  readonly type: typeof GET_USER_INFO_REQUEST_FAILED;
  readonly errorMessage: string;
};

export type TGetUserInfoRequestSuccess = {
  readonly type: typeof GET_USER_INFO_REQUEST_SUCCESS;
  readonly payload: { user: { name: string; email: string } };
};

export type TGetUserInfoActions = TSendUserInfoRequest | TGetUserInfoRequestFailed | TGetUserInfoRequestSuccess;

export function setStartForUserInfoRequest() {
  return { type: SEND_USER_INFO_REQUEST };
}

export function setFailedForUserInfoRequest(errorMessage: string) {
  return { type: GET_USER_INFO_REQUEST_FAILED, errorMessage };
}

export function setSuccessForUserInfoRequest(userData: { name: string; email: string }) {
  return { type: GET_USER_INFO_REQUEST_SUCCESS, payload: { user: userData } };
}

export function requestForUserInfo() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  };

  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForUserInfoRequest());

      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        const fullResponse = await fetchWithCheckJwt(urlUserInfo, options, checkResponse, refreshToken);

        await dispatch(setSuccessForUserInfoRequest(fullResponse.user));
        setUserData(fullResponse.user.name, fullResponse.user.email);
      } else {
        throw Error('refreshToken is absent among cookies');
      }
    } catch (error: any) {
      dispatch(setFailedForUserInfoRequest(error.message));
    }
  };
}
