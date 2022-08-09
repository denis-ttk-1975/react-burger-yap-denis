import { postUrlResetPassword } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

export const SEND_RESET_PASSWORD = 'SEND_RESET_PASSWORD';
export const GET_RESET_PASSWORD_FAILED = 'GET_RESET_PASSWORD_FAILED';
export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';

export function setStartForResetPasswordRequest() {
  return { type: SEND_RESET_PASSWORD };
}

export function setFailedForResetPasswordRequest(errorMessage) {
  return { type: GET_RESET_PASSWORD_FAILED, errorMessage };
}

export function setSuccessForResetPasswordRequest(message) {
  return { type: GET_RESET_PASSWORD_SUCCESS, payload: { message: message } };
}

export function resetUserPassword(password, token) {
  return async function (dispatch) {
    try {
      dispatch(setStartForResetPasswordRequest());
      // console.log(
      //   JSON.stringify({
      //     email: `${email}`,
      //     password: `${password}`,
      //     name: `${name}`,
      //   })
      // );
      // console.log(
      //   JSON.stringify({
      //     email: email,
      //     password: password,
      //     name: name,
      //   })
      // );
      // console.log(
      //   JSON.stringify({
      //     email: `${email}`,
      //     password: `${password}`,
      //     name: `${name}`,
      //   }) ===
      //     JSON.stringify({
      //       email: email,
      //       password: password,
      //       name: name,
      //     })
      // );
      const res = await fetch(postUrlResetPassword, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: `${password}`,
          token: `${token}`,
        }),
      });
      checkResponse(res);
      const fullResponse = await res.json();

      dispatch(setSuccessForResetPasswordRequest(fullResponse.message));
      alert(fullResponse.message);
    } catch (error) {
      dispatch(setFailedForResetPasswordRequest(error.message));
    }
  };
}
