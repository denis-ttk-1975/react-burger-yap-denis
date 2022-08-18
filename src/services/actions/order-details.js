import { postUrlForOrder } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';
import { fetchWithCheckJwt } from './../../utils/fetchWithCheckJwt';

import { getCookie } from './../../utils/getCookie';

import { setBunIntoOrder, setStuffingIntoOrder } from './burger-constructor';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export const RESET_ORDER_NUMBER = 'RESET_ORDER_NUMBER';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export function setStartForOrderRequest() {
  return { type: GET_ORDER };
}

export function setFailedForOrderRequest(errorMessage) {
  return { type: GET_ORDER_FAILED, errorMessage };
}

export function setSuccessForOrderRequest(orderNumber) {
  return { type: GET_ORDER_SUCCESS, orderNumber };
}

export function resetOrderNumberForModal() {
  return { type: RESET_ORDER_NUMBER };
}

export function setOpenForOrderModal() {
  return { type: OPEN_ORDER_MODAL };
}

export function setCloseForOrderModal() {
  return { type: CLOSE_ORDER_MODAL };
}

export function getOrderDetails(arrayIngredients) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify({
      ingredients: arrayIngredients,
    }),
  };

  return async function (dispatch) {
    try {
      dispatch(setStartForOrderRequest());

      const fullResponse = await fetchWithCheckJwt(postUrlForOrder, options, checkResponse, getCookie('refreshToken'));

      await dispatch(setSuccessForOrderRequest(('000000' + fullResponse.order.number).slice(-6)));
      await dispatch(setBunIntoOrder({}));
      await dispatch(setStuffingIntoOrder([]));
    } catch (error) {
      dispatch(setFailedForOrderRequest(error.message));
    }
  };
}
