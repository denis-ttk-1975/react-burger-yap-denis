import { postUrlUserRegister } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

import { setUserData } from './../../utils/setUserData';
import { setCookie } from './../../utils/setCookie';

export const SEND_REGISTRATION = 'SEND_REGISTRATION';
export const GET_REGISTRATION_FAILED = 'GET_REGISTRATION_FAILED';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS';

export function setStartForRegistrationRequest() {
  return { type: SEND_REGISTRATION };
}

export function setFailedForRegistrationRequest(errorMessage) {
  return { type: GET_REGISTRATION_FAILED, errorMessage };
}

export function setSuccessForRegistrationRequest(userData, accessToken, refreshToken) {
  return { type: GET_REGISTRATION_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function registerNewUser(name, email, password) {
  return async function (dispatch) {
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
    } catch (error) {
      dispatch(setFailedForRegistrationRequest(error.message));
    }
  };
}
