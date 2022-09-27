import { postUrlUserRegister } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';

import { setUserData } from '../../utils/setUserData';
import { setCookie } from '../../utils/setCookie';

import { AppDispatch } from './../../services/types/types';

export const SEND_REGISTRATION: 'SEND_REGISTRATION' = 'SEND_REGISTRATION';
export const GET_REGISTRATION_FAILED: 'GET_REGISTRATION_FAILED' = 'GET_REGISTRATION_FAILED';
export const GET_REGISTRATION_SUCCESS: 'GET_REGISTRATION_SUCCESS' = 'GET_REGISTRATION_SUCCESS';

export type TSendRegistration = {
  readonly type: typeof SEND_REGISTRATION;
};

export type TGetRegistrationFailed = {
  readonly type: typeof GET_REGISTRATION_FAILED;
  readonly errorMessage: string;
};

export type TGetRegistrationSuccess = {
  readonly type: typeof GET_REGISTRATION_SUCCESS;
  readonly payload: { message: string };
};

export type TRegisterActions = TSendRegistration | TGetRegistrationFailed | TGetRegistrationSuccess;


export function setStartForRegistrationRequest() {
  return { type: SEND_REGISTRATION };
}

export function setFailedForRegistrationRequest(errorMessage: string) {
  return { type: GET_REGISTRATION_FAILED, errorMessage };
}

export function setSuccessForRegistrationRequest(userData: { name: string; email: string }, accessToken: string, refreshToken: string) {
  return { type: GET_REGISTRATION_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function registerNewUser(name: string, email: string, password: string) {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForRegistrationRequest());

      const res = await fetch(postUrlUserRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
          name: `${name}`,
        }),
      });

      const fullResponse = await checkResponse(res);

      await dispatch(setSuccessForRegistrationRequest(fullResponse.user, fullResponse.accessToken, fullResponse.refreshToken));
      setUserData(fullResponse.user.name, fullResponse.user.email);
      setCookie('accessToken', fullResponse.accessToken.split('Bearer ')[1], { path: '/' });
      setCookie('refreshToken', fullResponse.refreshToken, { path: '/' });
    } catch (error: any) {
      dispatch(setFailedForRegistrationRequest(error.message));
    }
  };
}
