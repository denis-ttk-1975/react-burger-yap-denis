import { postUrlUserRegister } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

export const SEND_REGISTRATION = 'SEND_REGISTRATION';
export const GET_REGISTRATION_FAILED = 'GET_REGISTRATION_FAILED';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS';

export function setStartForRegistrationRequest() {
  return { type: SEND_REGISTRATION };
}

export function setFailedForRegistrationRequest(errorMessage) {
  return { type: GET_REGISTRATION_FAILED, errorMessage };
}

export function setSuccessForRegistrationRequest(userData) {
  return { type: GET_REGISTRATION_SUCCESS, user: userData };
}

export function registerNewUser() {
  return async function (dispatch) {
    try {
      dispatch(setStartForRegistrationRequest());

      const res = await fetch(postUrlUserRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'ddduuu1975@yandex.ru',
          password: 'password',
          name: 'DenisU',
        }),
      });
      checkResponse(res);
      const fullResponse = await res.json();

      dispatch(setSuccessForRegistrationRequest([...fullResponse.data]));
    } catch (error) {
      dispatch(setFailedForRegistrationRequest(error.message));
    }
  };
}
