import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';
import { ingredientForModalReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientForModal: ingredientForModalReducer,
  burgerConstructor: burgerConstructorReducer,
});

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state.burgerIngredientsReducer, action);
// };

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state, action);
// };


