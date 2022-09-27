import { fetchUrlForIngredients } from '../../utils/url';
import { checkResponse } from '../../utils/checkResponse';
import { TIngredientElement, AppDispatch } from './../../services/types/types';

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';

export const NAV_ACTIVE_BUN: 'NAV_ACTIVE_BUN' = 'NAV_ACTIVE_BUN';
export const NAV_ACTIVE_SAUCE: 'NAV_ACTIVE_SAUCE' = 'NAV_ACTIVE_SAUCE';
export const NAV_ACTIVE_MAIN: 'NAV_ACTIVE_MAIN' = 'NAV_ACTIVE_MAIN';

export type TGetIngredients = {
  readonly type: typeof GET_INGREDIENTS;
};

export type TGetIngredientsFailed = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
  readonly errorMessage: string;
};

export type TGetIngredientsSuccess = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredientElement[];
};

export type TNavActiveBun = {
  readonly type: typeof NAV_ACTIVE_BUN;
};

export type TNavActiveSauce = {
  readonly type: typeof NAV_ACTIVE_SAUCE;
};

export type TNavActiveMain = {
  readonly type: typeof NAV_ACTIVE_MAIN;
};

export function setStartForIngredientRequest() {
  return { type: GET_INGREDIENTS };
}

export function setFailedForIngredientRequest(errorMessage: string) {
  return { type: GET_INGREDIENTS_FAILED, errorMessage };
}

export function setSuccessForIngredientRequest(ingredients: TIngredientElement[]) {
  return { type: GET_INGREDIENTS_SUCCESS, ingredients };
}

export function setBunActiveForMenu() {
  return { type: NAV_ACTIVE_BUN };
}

export function setSauceActiveForMenu() {
  return { type: NAV_ACTIVE_SAUCE };
}

export function setMainActiveForMenu() {
  return { type: NAV_ACTIVE_MAIN };
}

export function getIngredients() {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(setStartForIngredientRequest());

      const res = await fetch(fetchUrlForIngredients);

      const fullResponse = await checkResponse(res);

      dispatch(setSuccessForIngredientRequest([...fullResponse.data]));
    } catch (error: any) {
      dispatch(setFailedForIngredientRequest(error.message));
    }
  };
}
