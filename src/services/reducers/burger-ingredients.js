import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, NAV_ACTIVE_BUN, NAV_ACTIVE_SAUCE, NAV_ACTIVE_MAIN } from './../actions/burger-ingredients';

const initialState = {
  isLoading: false,
  errorMessage: '',
  ingredients: [],
  activeNavElement: 'bun',
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      console.log('state: ', state);
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      console.log('state: ', state);
      return {
        ...state,
        ingredients: action.ingredients,
        isLoading: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      console.log('state: ', state);
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    }
    case NAV_ACTIVE_BUN: {
      console.log('state: ', state);
      return {
        ...state,
        activeNavElement: 'bun',
      };
    }
    case NAV_ACTIVE_SAUCE: {
      console.log('state: ', state);
      return {
        ...state,
        activeNavElement: 'sauce',
      };
    }
    case NAV_ACTIVE_MAIN: {
      console.log('state: ', state);
      return {
        ...state,
        activeNavElement: 'main',
      };
    }
    default: {
      console.log('state: ', state);
      return state;
    }
  }
};
