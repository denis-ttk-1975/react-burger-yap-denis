import React from 'react'; // импорт библиотеки

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import data from './../../utils/data';

function App() {
  // states for fetch hendling

  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setStateLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow

  const [ingredientInModal, setIngredientInModal] = React.useState(null); // array for all ingredients
  const [orderNumber, setOrderNumber] = React.useState(null); // state for order number

  // getting data about inredients from server

  React.useEffect(() => {
    const getProductData = async () => {
      setStateLoading(true);
      console.log(isLoading);
      setIngredients([...ingredients, 1, 2, 9]);
      console.log(ingredients);
      const res = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
      const fullResponse = await res.json();
      console.log(fullResponse);
      console.log(fullResponse.data);
      setIngredients([...fullResponse.data]);
      console.log(ingredients);
      setStateLoading(false);
      console.log(isLoading);
    };

    getProductData();
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    setOrderNumber(('000000' + Math.floor(Math.random() * 999999)).slice(-6));
    console.log(orderNumber);
    if (orderNumber) {
      setIsOrderDetailsOpened(true);
    }
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    setIngredientInModal(data);
    console.log(ingredientInModal);
    if (ingredientInModal) {
      setIsIngredientDetailsOpened(true);
    }
  };

  // function to close all opened modals

  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
    setIsIngredientDetailsOpened(false);
  };

  // handling for Esc pressing

  const handleEscKeydown = (e) => {
    e.key === 'Escape' && closeAllModals();
  };

  return (
    <>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients data={data} onClickIngredientsItem={clickIngredientItemHandler} />
          <BurgerConstructor data={data} onClickMakeOrder={clickOrderDetailsHandler} />
          {isOrderDetailsOpened && (
            <Modal title='Детали заказа' onOverlayClick={closeAllModals} onEscKeydown={handleEscKeydown}>
              <OrderDetails dataModal={orderNumber} />
            </Modal>
          )}
          {isIngredientDetailsOpened && (
            <Modal title='Детали ингредиента' onOverlayClick={closeAllModals} onEscKeydown={handleEscKeydown}>
              <IngredientDetails dataModal={ingredientInModal} />
            </Modal>
          )}
        </main>
      )}
    </>
  );
}

export default App;
