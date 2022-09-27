import { TIngredientElement } from './../../services/types/types';

export const SET_BURGER_INGREDIENTS: 'SET_BURGER_INGREDIENTS' = 'SET_BURGER_INGREDIENTS';
export const SET_BUN_INTO_ORDER: 'SET_BUN_INTO_ORDER' = 'SET_BUN_INTO_ORDER';
export const SET_STUFFING_INTO_ORDER: 'SET_STUFFING_INTO_ORDER' = 'SET_STUFFING_INTO_ORDER';

export type TSetBurgerIngredients = {
  readonly type: typeof SET_BURGER_INGREDIENTS;
  readonly ingredients: TIngredientElement[];
};

export type TSetBunIntoOrder = {
  readonly type: typeof SET_BUN_INTO_ORDER;
  readonly bun: TIngredientElement;
};

export type TSetStuffingIntoOrder = {
  readonly type: typeof SET_STUFFING_INTO_ORDER;
  readonly stuffing: TIngredientElement[];
};

export type TBurgerConstructorActions = TSetBurgerIngredients | TSetBunIntoOrder | TSetStuffingIntoOrder;

export function setBurgerIngredients(ingredients: TIngredientElement[]) {
  return { type: SET_BURGER_INGREDIENTS, ingredients };
}

export function setBunIntoOrder(bun: TIngredientElement | {}) {
  return { type: SET_BUN_INTO_ORDER, bun };
}

export function setStuffingIntoOrder(stuffing: TIngredientElement[]) {
  return { type: SET_STUFFING_INTO_ORDER, stuffing };
}
