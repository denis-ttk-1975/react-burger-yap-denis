import { SET_BURGER_INGREDIENTS, SET_BUN_INTO_ORDER, SET_STUFFING_INTO_ORDER, DELETE_STUFFING_FROM_ORDER } from './../actions/burger-constructor';

const initialState = {
  ingredients: [],
  bun: {},
  stuffing: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BURGER_INGREDIENTS: {
      console.log('state: ', state);
      return {
        ...state,
        ingredients: action.ingredients,
      };
    }
    case SET_BUN_INTO_ORDER: {
      console.log('state: ', state);
      return {
        ...state,
        bun: action.bun,
      };
    }
    case SET_STUFFING_INTO_ORDER: {
      console.log('state: ', state);
      return {
        ...state,
        stuffing: action.stuffing,
      };
    }
    case DELETE_STUFFING_FROM_ORDER: {
      console.log('state: ', state);
      return {
        ...state,
        stuffing: action.stuffing,
      };
    }

    default: {
      console.log('state: ', state);
      return state;
    }
  }
};
