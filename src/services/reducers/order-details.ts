import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS, RESET_ORDER_NUMBER, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from '../actions/order-details';

import { TOrderDetailsActions } from './../../services/actions/order-details';

type TOrderDetailsState = { isLoading: boolean; errorMessage: string; orderNumber: string; isOrderModalOpen: boolean };

const initialState: TOrderDetailsState = {
  isLoading: false,
  errorMessage: '',
  orderNumber: '000000',
  isOrderModalOpen: false,
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        isLoading: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    }
    case RESET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: '000000',
      };
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalOpen: true,
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isOrderModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
