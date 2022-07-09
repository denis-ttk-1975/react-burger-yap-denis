import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS, RESET_ORDER_NUMBER } from './../actions/order-details';

const initialState = {
  isLoading: false,
  errorMessage: '',
  orderNumber: '000000',
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER: {
      console.log('state: ', state);
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_ORDER_SUCCESS: {
      console.log('state: ', state);
      return {
        ...state,
        orderNumber: action.orderNumber,
        isLoading: false,
      };
    }
    case GET_ORDER_FAILED: {
      console.log('state: ', state);
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    }
    case RESET_ORDER_NUMBER: {
      console.log('state: ', state);
      return {
        ...state,
        orderNumber: '000000',
      };
    }
    default: {
      console.log('state: ', state);
      return state;
    }
  }
};
