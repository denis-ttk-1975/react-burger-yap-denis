import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
});

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state.burgerIngredientsReducer, action);
// };

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state, action);
// };

console.log('rootReducer: ', rootReducer);
