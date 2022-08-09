import { postUrlForgotPassword } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

export const SEND_FORGOT_PASSWORD = 'SEND_REGISTRATION';
export const GET_FORGOT_PASSWORD_FAILED = 'GET_REGISTRATION_FAILED';
export const GET_FORGOT_PASSWORD_SUCCESS = 'GET_REGISTRATION_SUCCESS';

export function setStartForForgotPasswordRequest() {
  return { type: SEND_FORGOT_PASSWORD };
}

export function setFailedForForgotPasswordRequest(errorMessage) {
  return { type: GET_FORGOT_PASSWORD_FAILED, errorMessage };
}

export function setSuccessForForgotPasswordRequest(message) {
  return { type: GET_FORGOT_PASSWORD_SUCCESS, payload: { message: message } };
}

export function sendForgotPasswordRequest(email) {
  return async function (dispatch) {
    try {
      dispatch(setStartForForgotPasswordRequest());

      const res = await fetch(postUrlForgotPassword, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
        }),
      });
      checkResponse(res);
      const fullResponse = await res.json();

      dispatch(setSuccessForForgotPasswordRequest(fullResponse.message));
    } catch (error) {
      dispatch(setFailedForForgotPasswordRequest(error.message));
    }
  };
}
