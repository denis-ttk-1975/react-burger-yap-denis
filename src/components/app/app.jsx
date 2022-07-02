import React, { useState, useEffect } from 'react'; // импорт библиотеки

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

// import { IngredientContext } from './../../utils/ingredientContext';
import BurgerIngredientsContext from './../../context/burger-ingredient-context';

import testData from './../../utils/data';
import { getProductData, postOrderData } from './../../utils/api';

function App() {
  // states for fetch handling
  const [ingredients, setIngredients] = useState([]);
  const [orderIngredients, setOrderIngredients] = useState([]);
  const [isLoading, setStateLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); // boolean state for orderDetailsWindow

  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false); // boolean state for orderDetailsWindow

  const [ingredientInModal, setIngredientInModal] = useState(null); // array for all ingredients
  const [orderNumber, setOrderNumber] = useState('000000'); // state for order number

  // getting data about ingredients from server

  useEffect(() => {
    getProductData(setIngredients, setStateLoading, setErrorMessage, errorMessage);
  }, []);

  // load data for order-ingredients
  useEffect(() => {
    setOrderIngredients(testData);
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    postOrderData(setOrderNumber, setStateLoading, setErrorMessage, errorMessage);
    setIsOrderDetailsOpened(true);
    console.log('isOrderDetailsOpened: ', isOrderDetailsOpened);
    console.log('orderNumber: ', orderNumber);
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
    <BurgerIngredientsContext.Provider value={{ orderIngredients, setOrderIngredients }}>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients data={ingredients} onClickIngredientsItem={clickIngredientItemHandler} />
          {/* <BurgerConstructor data={testData} onClickMakeOrder={clickOrderDetailsHandler} /> */}
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
    </BurgerIngredientsContext.Provider>
  );
}

export default App;
