import React, { useState, useEffect } from 'react'; // импорт библиотеки

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import testData from './../../utils/data';
import getProductData from './../../utils/api';

function App() {
  // states for fetch hendling

  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setStateLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false); // boolean state for orderDetailsWindow
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false); // boolean state for orderDetailsWindow

  const [ingredientInModal, setIngredientInModal] = useState(null); // array for all ingredients
  const [orderNumber, setOrderNumber] = useState(0); // state for order number

  // getting data about inredients from server

  useEffect(() => {
    getProductData(setIngredients, setStateLoading, setErrorMessage, errorMessage);
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    // setOrderNumber(('000000' + Math.floor(Math.random() * 999999)).slice(-6));
    setOrderNumber(('000000' + (Number(orderNumber) + 1)).slice(-6));
    console.log(orderNumber);
    setIsOrderDetailsOpened(true);
    // if (orderNumber) {
    //   setIsOrderDetailsOpened(true);
    // }
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    setIngredientInModal(data);
    setIsIngredientDetailsOpened(true);
    // if (ingredientInModal) {
    //   setIsIngredientDetailsOpened(true);
    // }
  };

  // function to close all opened modals

  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setOrderNumber(0);
    setIsIngredientDetailsOpened(false);
    setIngredientInModal(null);
  };

  console.log(ingredients);

  return (
    <>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients data={ingredients} onClickIngredientsItem={clickIngredientItemHandler} />
          <BurgerConstructor data={testData} onClickMakeOrder={clickOrderDetailsHandler} />
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
    </>
  );
}

export default App;
