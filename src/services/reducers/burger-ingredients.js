import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  NAV_ACTIVE_BUN,
  NAV_ACTIVE_SAUCE,
  NAV_ACTIVE_MAIN,
  SET_BUN_AMOUNT,
  SET_STUFFING_AMOUNT,
} from './../actions/burger-ingredients';

const initialState = {
  isLoading: false,
  errorMessage: '',
  menuIngredients: [],
  activeNavElement: 'bun',
  bunAmountArray: [{}],
  stuffingAmountArray: [],
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        menuIngredients: action.ingredients,
        isLoading: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    }
    case NAV_ACTIVE_BUN: {
      return {
        ...state,
        activeNavElement: 'bun',
      };
    }
    case NAV_ACTIVE_SAUCE: {
      return {
        ...state,
        activeNavElement: 'sauce',
      };
    }
    case NAV_ACTIVE_MAIN: {
      return {
        ...state,
        activeNavElement: 'main',
      };
    }
    case SET_BUN_AMOUNT: {
      return {
        ...state,
        bunAmountArray: action.payload,
      };
    }
    case SET_STUFFING_AMOUNT: {
      return {
        ...state,
        stuffingAmountArray: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
