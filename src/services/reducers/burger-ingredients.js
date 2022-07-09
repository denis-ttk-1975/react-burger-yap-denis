import { GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS } from './../actions/burger-ingredients';

const initialState = {
  isLoading: false,
  errorMessage: '',
  ingredients: [],
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
    default: {
      console.log('state: ', state);
      return state;
    }
  }
};
