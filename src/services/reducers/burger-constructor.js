import { SET_BURGER_INGREDIENTS, SET_BUN_INTO_ORDER, SET_STUFFING_INTO_ORDER } from './../actions/burger-constructor';

const initialState = {
  orderIngredients: [],
  bun: {},
  stuffing: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BURGER_INGREDIENTS: {
      return {
        ...state,
        orderIngredients: action.ingredients,
      };
    }
    case SET_BUN_INTO_ORDER: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case SET_STUFFING_INTO_ORDER: {
      return {
        ...state,
        stuffing: action.stuffing,
      };
    }

    default: {
      return state;
    }
  }
};
