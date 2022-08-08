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

export function setSuccessForRegistrationRequest(userData, accessToken, refreshToken) {
  return { type: GET_REGISTRATION_SUCCESS, payload: { user: userData, accessToken: accessToken, refreshToken: refreshToken } };
}

export function registerNewUser(name, email, password) {
  return async function (dispatch) {
    try {
      dispatch(setStartForRegistrationRequest());
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
      checkResponse(res);
      const fullResponse = await res.json();

      dispatch(setSuccessForRegistrationRequest(fullResponse.user, fullResponse.accessToken, fullResponse.refreshToken));
    } catch (error) {
      dispatch(setFailedForRegistrationRequest(error.message));
    }
  };
}
