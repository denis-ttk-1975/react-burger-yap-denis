import { SET_INGREDIENT, RESET_INGREDIENT, OPEN_INGREDIENT_MODAL, CLOSE_INGREDIENT_MODAL } from './../actions/ingredient-details';

const initialState = {
  ingredientData: {},
  isIngredientModalOpen: false,
};

export const ingredientForModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      console.log('state: ', state);
      return {
        ...state,
        ingredientData: action.ingredientData,
      };
    }

    case RESET_INGREDIENT: {
      console.log('state: ', state);
      return {
        ...state,
        ingredientData: {},
      };
    }
    case OPEN_INGREDIENT_MODAL: {
      console.log('state: ', state);
      return {
        ...state,
        isIngredientModalOpen: true,
      };
    }
    case CLOSE_INGREDIENT_MODAL: {
      console.log('state: ', state);
      return {
        ...state,
        isIngredientModalOpen: false,
      };
    }
    default: {
      console.log('state: ', state);
      return state;
    }
  }
};
