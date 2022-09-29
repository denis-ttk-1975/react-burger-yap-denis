import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { TBurgerConstructorActions } from './../actions/burger-constructor';
import { TBurgerIngredientsActions } from './../actions/burger-ingredients';
import { TForgotPasswordActions } from './../actions/forgot-password';
import { TGetUserInfoActions } from './../actions/get-user-info';
import { TIngredientDetailsActions } from './../actions/ingredient-details';
import { TLoginActions } from './../actions/login';
import { TLogoutActions } from './../actions/logout';
import { TOrderDetailsActions } from './../actions/order-details';
import { TPatchUserInfoActions } from './../actions/patch-user-info';
import { TRegisterActions } from './../actions/register';
import { TResetPasswordActions } from './../actions/reset-password';
import { TUpdateTokenActions } from './../actions/update-token';
import { TWebsocketActions } from './../actions/websocket';

import { store } from './../store';
import { rootReducer } from './../reducers/index';

export type TwsActions = {
  wsConnect: string;
  wsDisconnect: string;

  onConnect: (wsUrl: string, token: string | null | undefined) => { type: 'CONNECT'; payload: { wsUrl: string; token: string | null | undefined } };
  onOpen: () => { type: 'WS_OPEN' };
  onClose: () => { type: 'WS_CLOSE' };
  onError: (error: string) => { type: 'WS_ERROR'; payload: string };
  onMessage: (data: any) => { type: 'WS_MESSAGE'; payload: any };
};

export type RootState = ReturnType<typeof rootReducer>;

// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type TApplicationActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TForgotPasswordActions
  | TGetUserInfoActions
  | TIngredientDetailsActions
  | TLoginActions
  | TLogoutActions
  | TOrderDetailsActions
  | TPatchUserInfoActions
  | TRegisterActions
  | TResetPasswordActions
  | TUpdateTokenActions
  | TWebsocketActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type TLocationState = {
  from: {
    pathname: string;
  };
};

export type THistory =
  | {
      hash?: string;
      key?: string;
      pathname: string;
      search?: string;
      state?: { fromForgotPassword: boolean };
    }
  | {};

export type TIngredientElement = {
  carbohydrates: number;
  fat: number;
  proteins: number;
  calories: number;
  image_large: string;
  image_mobile: string;
  type: string;
  __v: number;
  uuid: string;
  price: number;
  name: string;
  image: string;
  _id: string;
  restAmount?: number;
};
