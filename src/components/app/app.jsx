import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import { BurgerIngredientsContext, BurgerConstructorContext } from './../../context/BurgerContext';

import { store } from './../../index';

import { getIngredients } from './../../services/actions/burger-ingredients';

import testData from './../../utils/data';
import { getProductData, postOrderData } from './../../utils/api';

function App() {
  const { ingredients, isLoading: isLoadingIngredients, errorMessage } = useSelector((state) => state.burgerIngredients);

  console.log(store.getState());

  const dispatch = useDispatch();

  // states for fetch handling
  // const [ingredients, setIngredients] = useState([]);

  const [orderIngredients, setOrderIngredients] = useState([]);

  // const [isLoadingIngredients, setStateLoadingIngredients] = useState(false);
  // const [errorMessageIngredients, setErrorMessageIngredients] = useState('');

  const [isLoadingOrder, setStateLoadingOrder] = useState(false);
  const [errorMessageOrder, setErrorMessageOrder] = useState('');

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); // boolean state for orderDetailsWindow

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false); // boolean state for orderDetailsWindow

  const [ingredientInModal, setIngredientInModal] = useState(null); // array for all ingredients
  const [orderNumber, setOrderNumber] = useState('000000'); // state for order number

  // getting data about ingredients from server

  // useEffect(() => {
  //   getProductData(setIngredients, setStateLoading, setErrorMessage, errorMessage);
  // }, []);

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  // load data for order-ingredients
  useEffect(() => {
    setOrderIngredients(testData);
  });

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    postOrderData(setOrderNumber, setStateLoadingOrder, setErrorMessageOrder, errorMessageOrder, orderIngredients);
    setIsOrderDetailsOpened(true);
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    setIngredientInModal(data);
    setIsIngredientDetailsOpened(true);
  };

  // function to close all opened modals

  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setOrderNumber(0);
    setIsIngredientDetailsOpened(false);
    setIngredientInModal(null);
  };

  return (
    <BurgerIngredientsContext.Provider value={{ ingredients }}>
      <BurgerConstructorContext.Provider value={{ orderIngredients, setOrderIngredients }}>
        <AppHeader />
        {!isLoadingIngredients && (
          <main className={styles.main}>
            <BurgerIngredients onClickIngredientsItem={clickIngredientItemHandler} />

            <BurgerConstructor onClickMakeOrder={clickOrderDetailsHandler} />
            {isOrderDetailsOpened && (
              <Modal title='' closeAllModals={closeAllModals}>
                <OrderDetails dataModal={orderNumber} />
              </Modal>
            )}
            {isIngredientDetailsOpened && (
              <Modal title='Детали ингредиента' closeAllModals={closeAllModals}>
                <IngredientDetails dataModal={ingredientInModal} />
              </Modal>
            )}
          </main>
        )}
      </BurgerConstructorContext.Provider>
    </BurgerIngredientsContext.Provider>
  );
}

export default App;
