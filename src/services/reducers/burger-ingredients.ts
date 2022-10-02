import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, NAV_ACTIVE_BUN, NAV_ACTIVE_SAUCE, NAV_ACTIVE_MAIN } from '../actions/burger-ingredients';

import { TIngredientElement } from './../../services/types/types';
import { TBurgerIngredientsActions } from './../../services/actions/burger-ingredients';

type TBurgerIngredientsState = { isLoading: boolean; errorMessage: string; menuIngredients: TIngredientElement[]; activeNavElement: string };

const initialState: TBurgerIngredientsState = {
  isLoading: false,
  errorMessage: '',
  menuIngredients: [],
  activeNavElement: 'bun',
};

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions) => {
  console.log('burgerIngredientsReducer');
  console.log(action.type);
  switch (action.type) {
    case GET_INGREDIENTS: {
      console.log('GET_INGREDIENTS: ');
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      console.log('GET_INGREDIENTS_SUCCESS: ');
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
      console.log('bun');
      return {
        ...state,
        activeNavElement: 'bun',
      };
    }
    case NAV_ACTIVE_SAUCE: {
      console.log('sauce');

      return {
        ...state,
        activeNavElement: 'sauce',
      };
    }
    case NAV_ACTIVE_MAIN: {
      console.log('main');

      return {
        ...state,
        activeNavElement: 'main',
      };
    }
    default: {
      console.log('я проскочил весь редьюсер');
      return state;
    }
  }
};
