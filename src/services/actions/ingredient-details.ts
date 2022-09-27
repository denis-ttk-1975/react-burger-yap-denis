import { TIngredientElement } from './../../services/types/types';

export const SET_INGREDIENT: 'SET_INGREDIENT' = 'SET_INGREDIENT';
export const RESET_INGREDIENT: 'RESET_INGREDIENT' = 'RESET_INGREDIENT';
export const OPEN_INGREDIENT_MODAL: 'OPEN_INGREDIENT_MODAL' = 'OPEN_INGREDIENT_MODAL';
export const CLOSE_INGREDIENT_MODAL: 'CLOSE_INGREDIENT_MODAL' = 'CLOSE_INGREDIENT_MODAL';

export type TSetIngredient = {
  readonly type: typeof SET_INGREDIENT;
  readonly ingredientData: TIngredientElement;
};
export type TResetIngredient = { readonly type: typeof RESET_INGREDIENT };

export type TOpenIngredientModal = {
  readonly type: typeof OPEN_INGREDIENT_MODAL;
};

export type TCloseIngredientModal = {
  readonly type: typeof CLOSE_INGREDIENT_MODAL;
};

export function setIngredientItemForModal(ingredientData: TIngredientElement) {
  return { type: SET_INGREDIENT, ingredientData };
}

export function resetIngredientItemForModal() {
  return { type: RESET_INGREDIENT };
}

export function setOpenForIngredientModal() {
  return { type: OPEN_INGREDIENT_MODAL };
}

export function setCloseForIngredientModal() {
  return { type: CLOSE_INGREDIENT_MODAL };
}
