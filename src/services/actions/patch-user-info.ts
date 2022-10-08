import { urlUserInfo } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';
import { fetchWithCheckJwt } from '../../utils/fetchWithCheckJwt';

import { setUserData } from '../../utils/setUserData';
import { getCookie } from '../../utils/getCookie';

import { updateTokenRequest } from './update-token';

import { AppDispatch } from './../../services/store';

export const SEND_UPDATE_USER_INFO: 'SEND_UPDATE_USER_INFO' = 'SEND_UPDATE_USER_INFO';
export const GET_UPDATE_USER_INFO_FAILED: 'GET_UPDATE_USER_INFO_FAILED' = 'GET_UPDATE_USER_INFO_FAILED';
export const GET_UPDATE_USER_INFO_SUCCESS: 'GET_UPDATE_USER_INFO_SUCCESS' = 'GET_UPDATE_USER_INFO_SUCCESS';

export type TSendUpdateUserInfo = {
  readonly type: typeof SEND_UPDATE_USER_INFO;
};

export type TGetUpdateUserInfoFailed = {
  readonly type: typeof GET_UPDATE_USER_INFO_FAILED;
  readonly errorMessage: string;
};

export type TGetUpdateUserInfoSuccess = {
  readonly type: typeof GET_UPDATE_USER_INFO_SUCCESS;
  readonly payload: { user: { name: string; email: string } };
};

export type TPatchUserInfoActions = TSendUpdateUserInfo | TGetUpdateUserInfoFailed | TGetUpdateUserInfoSuccess;

export function setStartForUpdateUserInfoRequest() {
  return { type: SEND_UPDATE_USER_INFO };
}

export function setFailedForUpdateUserInfoRequest(errorMessage: string) {
  return { type: GET_UPDATE_USER_INFO_FAILED, errorMessage };
}

export function setSuccessForUpdateUserInfoRequest(userData: { name: string; email: string }) {
  return { type: GET_UPDATE_USER_INFO_SUCCESS, payload: { user: userData } };
}

export function updateUserInfo(name: string, email: string, password: string) {
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

  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForUpdateUserInfoRequest());

      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        const fullResponse = await fetchWithCheckJwt(urlUserInfo, options, checkResponse, refreshToken);

        await dispatch(setSuccessForUpdateUserInfoRequest(fullResponse.user));
        setUserData(fullResponse.user.name, fullResponse.user.email);
      } else {
        throw Error('refreshToken is absent among cookies');
      }
    } catch (error: any) {
      dispatch(setFailedForUpdateUserInfoRequest(error.message));
    }
  };
}
