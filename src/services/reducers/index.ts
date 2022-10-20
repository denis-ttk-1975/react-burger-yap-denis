import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';
import { ingredientForModalReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';
import { userRegistrationReducer } from './register';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';
import { userLoginReducer } from './login';
import { userLogoutReducer } from './logout';
import { userUpdateInfoReducer } from './patch-user-info';
import { getUserInfoReducer } from './get-user-info';
import { wsReducer } from './websocket';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientForModal: ingredientForModalReducer,
  burgerConstructor: burgerConstructorReducer,
  userRegistration: userRegistrationReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
  userUpdateInfo: userUpdateInfoReducer,
  getUserInfo: getUserInfoReducer,
  orderTable: wsReducer,
});
