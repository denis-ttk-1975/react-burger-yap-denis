import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';
import { ingredientForModalReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';
import { userRegistrationReducer } from './register';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';
import { userLoginReducer } from './login';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientForModal: ingredientForModalReducer,
  burgerConstructor: burgerConstructorReducer,
  userRegistration: userRegistrationReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  userLogin: userLoginReducer,
});

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state.burgerIngredientsReducer, action);
// };

// export const rootReducer = (state, action) => {
//   burgerIngredientsReducer: burgerIngredientsReducer(state, action);
// };
