import { postUrlForOrder } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

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
  return async function (dispatch) {
    let fullResponse;
    try {
      const bodyIngredients = arrayIngredients;
      dispatch(setStartForOrderRequest());

      const res = await fetch(postUrlForOrder, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: bodyIngredients,
        }),
      });
      // if (!res.ok) {
      //   throw new Error('Сервер не дал ответа');
      // }
      checkResponse(res);
      fullResponse = await res.json();

      dispatch(setSuccessForOrderRequest(('000000' + fullResponse.order.number).slice(-6)));
      dispatch(setBunIntoOrder({}));
      dispatch(setStuffingIntoOrder([]));
    } catch (error) {
      dispatch(setFailedForOrderRequest(error.message));
    }
  };
}
