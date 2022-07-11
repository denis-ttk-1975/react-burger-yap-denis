import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import { store } from './../../index';

import { getIngredients } from './../../services/actions/burger-ingredients';
import { getOrderDetails } from './../../services/actions/order-details';

import testData from './../../utils/data';
// import { getProductData, postOrderData } from './../../utils/api';

function App() {
  const { menuIngredients, isLoading: isLoadingIngredients, errorMessage: errorMessageIngredients } = useSelector((state) => state.burgerIngredients);
  const { orderNumber, isLoading: isLoadingOrderDetails, errorMessage: errorMessageOrderDetails, isOrderModalOpen } = useSelector((state) => state.orderDetails);
  const { ingredientData: ingredientInModal, isIngredientModalOpen } = useSelector((state) => state.ingredientForModal);

  const dispatch = useDispatch();

  const scrollHandler = () => {};

  const [orderIngredients, setOrderIngredients] = useState([]);

  // getting data about ingredients from server

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  // load data for order-ingredients
  useEffect(() => {
    dispatch({ type: 'SET_BURGER_INGREDIENTS', ingredients: [] });
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    dispatch(getOrderDetails(testData));
    dispatch({ type: 'OPEN_ORDER_MODAL' });
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    dispatch({ type: 'SET_INGREDIENT', ingredientData: data });

    dispatch({ type: 'OPEN_INGREDIENT_MODAL' });
  };

  // function to close all opened modals

  const closeAllModals = () => {
    dispatch({ type: 'CLOSE_ORDER_MODAL' });

    dispatch({ type: 'RESET_ORDER_NUMBER' });
    dispatch({ type: 'CLOSE_INGREDIENT_MODAL' });

    dispatch({ type: 'RESET_INGREDIENT' });
  };

  return (
    <>
      <AppHeader />
      {!isLoadingIngredients && (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients onClickIngredientsItem={clickIngredientItemHandler} />

            <BurgerConstructor onClickMakeOrder={() => clickOrderDetailsHandler(testData)} />
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
