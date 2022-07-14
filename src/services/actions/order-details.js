import { postUrlForOrder } from './../../utils/url';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export const RESET_ORDER_NUMBER = 'RESET_ORDER_NUMBER';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export function getOrderDetails(arrayIngredients) {
  return async function (dispatch) {
    let fullResponse;
    try {
      // const bodyIngredients = arrayIngredients.filter((item) => item.__v > 0);
      const bodyIngredients = arrayIngredients;
      dispatch({
        type: GET_ORDER,
      });

      const res = await fetch(postUrlForOrder, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: bodyIngredients,
        }),
      });
      if (!res.ok) {
        throw new Error('Сервер не дал ответа');
      }
      fullResponse = await res.json();

      dispatch({
        type: GET_ORDER_SUCCESS,
        orderNumber: ('000000' + fullResponse.order.number).slice(-6),
      });
    } catch (error) {
      dispatch({
        type: GET_ORDER_FAILED,
        errorMessage: error.message,
      });
    }
  };
}
