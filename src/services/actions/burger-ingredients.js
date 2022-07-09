import { fetchUrlForIngredients } from './../../utils/url';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

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
