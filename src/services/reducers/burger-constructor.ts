import { SET_BURGER_INGREDIENTS, SET_BUN_INTO_ORDER, SET_STUFFING_INTO_ORDER } from '../actions/burger-constructor';

import { TIngredientElement } from './../../services/types/types';
import { TBurgerConstructorActions } from './../../services/actions/burger-constructor';

type TBurgerIngredientsState = { orderIngredients: TIngredientElement[]; bun: TIngredientElement; stuffing: TIngredientElement[] };

const initialState: TBurgerIngredientsState = {
  orderIngredients: [],
  bun: {},
  stuffing: [],
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions) => {
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
