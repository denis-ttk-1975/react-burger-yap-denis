export const SET_BURGER_INGREDIENTS = 'SET_BURGER_INGREDIENTS';
export const SET_BUN_INTO_ORDER = 'SET_BUN_INTO_ORDER';
export const SET_STUFFING_INTO_ORDER = 'SET_STUFFING_INTO_ORDER';

export function setBurgerIngredients(orderIngredients) {
  return { type: SET_BURGER_INGREDIENTS, orderIngredients };
}

export function setBunIntoOrder(bun) {
  return { type: SET_BUN_INTO_ORDER, bun };
}

export function setStuffingIntoOrder(stuffing) {
  return { type: SET_STUFFING_INTO_ORDER, stuffing };
}
