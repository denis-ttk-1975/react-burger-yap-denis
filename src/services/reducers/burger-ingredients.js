import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, NAV_ACTIVE_BUN, NAV_ACTIVE_SAUCE, NAV_ACTIVE_MAIN } from './../actions/burger-ingredients';

const initialState = {
  isLoading: false,
  errorMessage: '',
  menuIngredients: [],
  activeNavElement: 'bun',
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

    default: {
      return state;
    }
  }
};
