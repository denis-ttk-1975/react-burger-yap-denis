import React from 'react'; // импорт библиотеки

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import styles from './app.module.css';

import testData from './../../utils/data';
import fetchUrl from './../../utils/fetch-url';

function App() {
  // states for fetch hendling

  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setStateLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow

  const [ingredientInModal, setIngredientInModal] = React.useState(null); // array for all ingredients
  const [orderNumber, setOrderNumber] = React.useState(0); // state for order number

  // getting data about inredients from server

  React.useEffect(() => {
    const getProductData = async () => {
      //   setStateLoading(true);
      //   const res = await fetch(fetchUrl);
      //   const fullResponse = await res.json();
      //   setIngredients([...fullResponse.data]);
      //   setStateLoading(false);

      try {
        setStateLoading(true);
        const res = await fetch(fetchUrl);
        if (!res.ok) {
          throw new Error('Сервер не дал ответа');
        }
        const fullResponse = await res.json();
        setIngredients([...fullResponse.data]);
        setStateLoading(false);
      } catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
        setErrorMessage(error.message);
        setStateLoading(false);
      }
    };

    getProductData();
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = () => {
    // setOrderNumber(('000000' + Math.floor(Math.random() * 999999)).slice(-6));
    setOrderNumber(('000000' + (Number(orderNumber) + 1)).slice(-6));
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

  console.log(ingredients);

  return (
    <>
      <AppHeader />
      {!isLoading && (
        <main className={styles.main}>
          <BurgerIngredients data={ingredients} onClickIngredientsItem={clickIngredientItemHandler} />
          <BurgerConstructor data={testData} onClickMakeOrder={clickOrderDetailsHandler} />
          {isOrderDetailsOpened && (
            <Modal title='' onOverlayClick={closeAllModals} onEscKeydown={handleEscKeydown}>
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
