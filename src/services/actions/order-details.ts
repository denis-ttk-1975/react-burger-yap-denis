import { postUrlForOrder } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';
import { fetchWithCheckJwt } from '../../utils/fetchWithCheckJwt';

import { getCookie } from '../../utils/getCookie';

import { setBunIntoOrder, setStuffingIntoOrder } from './burger-constructor';

import { TIngredientElement, AppDispatch } from './../../services/types/types';

export const GET_ORDER: 'GET_ORDER' = 'GET_ORDER';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';

export const RESET_ORDER_NUMBER: 'RESET_ORDER_NUMBER' = 'RESET_ORDER_NUMBER';

export const OPEN_ORDER_MODAL: 'OPEN_ORDER_MODAL' = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL: 'CLOSE_ORDER_MODAL' = 'CLOSE_ORDER_MODAL';

export type TGetOrder = {
  readonly type: typeof GET_ORDER;
};

export type TGetOrderFailed = {
  readonly type: typeof GET_ORDER_FAILED;
  readonly errorMessage: string;
};

export type TGetOrderSuccess = {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly orderNumber: string;
};

export type TResetOrderNumber = { readonly type: typeof RESET_ORDER_NUMBER };

export type TOpenOrderModal = {
  readonly type: typeof OPEN_ORDER_MODAL;
};

export type TCloseOrderModal = {
  readonly type: typeof CLOSE_ORDER_MODAL;
};

export function setStartForOrderRequest() {
  return { type: GET_ORDER };
}

export function setFailedForOrderRequest(errorMessage: string) {
  return { type: GET_ORDER_FAILED, errorMessage };
}

export function setSuccessForOrderRequest(orderNumber: string) {
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

export function getOrderDetails(arrayIngredients: TIngredientElement[]) {
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

  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForOrderRequest());

      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        const fullResponse = await fetchWithCheckJwt(postUrlForOrder, options, checkResponse, refreshToken);

        await dispatch(setSuccessForOrderRequest(('000000' + fullResponse.order.number).slice(-6)));
        await dispatch(setBunIntoOrder({}));
        await dispatch(setStuffingIntoOrder([]));
      } else {
        throw Error('refreshToken is absent among cookies');
      }
    } catch (error: any) {
      dispatch(setFailedForOrderRequest(error.message));
    }
  };
}
