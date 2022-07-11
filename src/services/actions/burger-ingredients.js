import { fetchUrlForIngredients } from './../../utils/url';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const NAV_ACTIVE_BUN = 'NAV_ACTIVE_BUN';
export const NAV_ACTIVE_SAUCE = 'NAV_ACTIVE_SAUCE';
export const NAV_ACTIVE_MAIN = 'NAV_ACTIVE_MAIN';

export const SET_BUN_AMOUNT = 'SET_BUN_AMOUNT';
export const SET_STUFFING_AMOUNT = 'SET_STUFFING_AMOUNT';

export function getIngredients() {
  return async function (dispatch) {
    try {
      dispatch({
        type: GET_INGREDIENTS,
      });

      const res = await fetch(fetchUrlForIngredients);
      if (!res.ok) {
        throw new Error('Сервер не дал ответа');
      }
      const fullResponse = await res.json();

      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: [...fullResponse.data],
      });
    } catch (error) {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
        errorMessage: error.message,
      });
    }
  };
}
