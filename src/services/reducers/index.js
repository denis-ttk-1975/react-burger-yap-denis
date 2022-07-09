import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
});

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state.burgerIngredientsReducer, action);
// };

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state, action);
// };

console.log('rootReducer: ', rootReducer);
