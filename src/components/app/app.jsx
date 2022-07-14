import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { SET_BURGER_INGREDIENTS, SET_BUN_INTO_ORDER, SET_STUFFING_INTO_ORDER, DELETE_STUFFING_FROM_ORDER } from './../../services/actions/burger-constructor';
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  NAV_ACTIVE_BUN,
  NAV_ACTIVE_SAUCE,
  NAV_ACTIVE_MAIN,
  SET_BUN_AMOUNT,
  SET_STUFFING_AMOUNT,
} from './../../services/actions/burger-ingredients';

import { SET_INGREDIENT, RESET_INGREDIENT, OPEN_INGREDIENT_MODAL, CLOSE_INGREDIENT_MODAL } from './../../services/actions/ingredient-details';
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS, RESET_ORDER_NUMBER, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from './../../services/actions/order-details';

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import { getIngredients } from './../../services/actions/burger-ingredients';
import { getOrderDetails } from './../../services/actions/order-details';

import testData from './../../utils/data';
// import { getProductData, postOrderData } from './../../utils/api';

function App() {
  const { menuIngredients, isLoading: isLoadingIngredients, errorMessage: errorMessageIngredients } = useSelector((state) => state.burgerIngredients);
  const { orderNumber, isLoading: isLoadingOrderDetails, errorMessage: errorMessageOrderDetails, isOrderModalOpen } = useSelector((state) => state.orderDetails);
  const { ingredientData: ingredientInModal, isIngredientModalOpen } = useSelector((state) => state.ingredientForModal);
  const { orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();

  // getting data about ingredients from server

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  // load data for order-ingredients
  useEffect(() => {
    dispatch({ type: SET_BURGER_INGREDIENTS, ingredients: [] });
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = (bunElement, stuffingArray) => {
    console.log('Object.keys(bunElement).length: ', Object.keys(bunElement).length);
    console.log('stuffingArray.length: ', stuffingArray.length);
    if (Object.keys(bunElement).length === 0) {
      alert('Добавьте булку');
    } else if (!stuffingArray.length) {
      alert('Добавьте хотя бы один ингредиент');
    } else {
      dispatch(getOrderDetails([bunElement, ...stuffingArray]));
      dispatch({ type: OPEN_ORDER_MODAL });
    }
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    dispatch({ type: SET_INGREDIENT, ingredientData: data });

    dispatch({ type: OPEN_INGREDIENT_MODAL });
  };

  // function to close all opened modals

  const closeAllModals = () => {
    dispatch({ type: CLOSE_ORDER_MODAL });

    dispatch({ type: RESET_ORDER_NUMBER });
    dispatch({ type: CLOSE_INGREDIENT_MODAL });

    dispatch({ type: RESET_INGREDIENT });
  };

  return (
    <>
      <AppHeader />
      {!isLoadingIngredients && (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients onClickIngredientsItem={clickIngredientItemHandler} />

            <BurgerConstructor onClickMakeOrder={() => clickOrderDetailsHandler(bun, stuffing)} />
          </DndProvider>
          {isOrderModalOpen && !isLoadingOrderDetails && !errorMessageOrderDetails && (
            <Modal title='' closeAllModals={closeAllModals}>
              <OrderDetails dataModal={orderNumber} />
            </Modal>
          )}
          {isIngredientModalOpen && (
            <Modal title='Детали ингредиента' closeAllModals={closeAllModals}>
              <IngredientDetails dataModal={ingredientInModal} />
            </Modal>
          )}
        </main>
      )}
    </>
  );
}

export default App;
