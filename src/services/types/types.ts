import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

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
};
