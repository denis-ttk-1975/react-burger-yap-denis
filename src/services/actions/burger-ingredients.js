import { fetchUrlForIngredients } from './../../utils/url';
import { checkResponse } from './../../utils/checkResponse';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const NAV_ACTIVE_BUN = 'NAV_ACTIVE_BUN';
export const NAV_ACTIVE_SAUCE = 'NAV_ACTIVE_SAUCE';
export const NAV_ACTIVE_MAIN = 'NAV_ACTIVE_MAIN';

export function setStartForIngredientRequest() {
  return { type: GET_INGREDIENTS };
}

export function setFailedForIngredientRequest(errorMessage) {
  return { type: GET_INGREDIENTS_FAILED, errorMessage };
}

export function setSuccessForIngredientRequest(ingredients) {
  return { type: GET_INGREDIENTS_SUCCESS, ingredients };
}

export function setBunActiveForMenu(activeNavElement) {
  return { type: NAV_ACTIVE_BUN };
}

export function setSauceActiveForMenu(activeNavElement) {
  return { type: NAV_ACTIVE_SAUCE };
}

export function setMainActiveForMenu(activeNavElement) {
  return { type: NAV_ACTIVE_MAIN };
}

export function getIngredients() {
  return async function (dispatch) {
    try {
      dispatch(setStartForIngredientRequest());

      const res = await fetch(fetchUrlForIngredients);
     
      const fullResponse = await  checkResponse(res);

      dispatch(setSuccessForIngredientRequest([...fullResponse.data]));
    } catch (error) {
      dispatch(setFailedForIngredientRequest(error.message));
    }
  };
}
