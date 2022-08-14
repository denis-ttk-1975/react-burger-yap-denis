import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';

import { setIngredientItemForModal, resetIngredientItemForModal, setOpenForIngredientModal, setCloseForIngredientModal } from './../../services/actions/ingredient-details';
import { resetOrderNumberForModal, setOpenForOrderModal, setCloseForOrderModal } from './../../services/actions/order-details';

import Preloader from './../preloader/preloader';
import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';

import Login from './../../pages/login/login';
import Register from './../../pages/register/register';
import ForgotPassword from './../../pages/forgot-password/forgot-password';
import ResetPassword from './../../pages/reset-password/reset-password';
import Profile from './../../pages/profile/profile';
import OrderHistory from './../../pages/order-history/order-history';
import Feed from './../../pages/feed/feed';
import { ProtectedRoute } from './../protected-route/protected-route';

import { getCookie } from './../../utils/getCookie';

import styles from './app.module.css';

import { setBurgerIngredients } from './../../services/actions/burger-constructor';
import { getIngredients } from './../../services/actions/burger-ingredients';
import { getOrderDetails } from './../../services/actions/order-details';

function App() {
  const { menuIngredients, isLoading: isLoadingIngredients, errorMessage: errorMessageIngredients } = useSelector((state) => state.burgerIngredients);
  const { orderNumber, isLoading: isLoadingOrderDetails, errorMessage: errorMessageOrderDetails, isOrderModalOpen } = useSelector((state) => state.orderDetails);
  const { ingredientData: ingredientInModal, isIngredientModalOpen } = useSelector((state) => state.ingredientForModal);
  const { orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation();

  // getting data about ingredients from server

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  // load data for order-ingredients
  useEffect(() => {
    dispatch(setBurgerIngredients([]));
  }, []);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = (bunElement, stuffingArray) => {
    if (Object.keys(bunElement).length === 0) {
      alert('Добавьте булку');
    } else if (!stuffingArray.length) {
      alert('Добавьте хотя бы один ингредиент');
    } else if (!getCookie('refreshToken')) {
      dispatch(setBurgerIngredients([bunElement, ...stuffingArray]));
      history.push({ pathname: '/login' });
    } else {
      dispatch(getOrderDetails([bunElement, ...stuffingArray]));
      dispatch(setOpenForOrderModal());
      dispatch(setBurgerIngredients([]));
    }
  };

  // handling for click on tab with ingredient

  const clickIngredientItemHandler = (data) => {
    dispatch(setIngredientItemForModal(data));

    dispatch(setOpenForIngredientModal());
  };

  // function to close all opened modals

  const closeAllModals = () => {
    dispatch(setCloseForOrderModal());

    dispatch(resetOrderNumberForModal());
    dispatch(setCloseForIngredientModal());

    dispatch(resetIngredientItemForModal());
  };
  console.log('history', history);

  return (
    // <Router>
    <>
      {(isLoadingIngredients || isLoadingOrderDetails) && <Preloader />}
      <AppHeader />
      {!isLoadingIngredients && (
        <main className={styles.main}>
          <Switch>
            <Route path='/' exact={true}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients onClickIngredientsItem={clickIngredientItemHandler} />

                <BurgerConstructor onClickMakeOrder={() => clickOrderDetailsHandler(bun, stuffing)} />
              </DndProvider>
            </Route>
            <ProtectedRoute path='/login' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              {/* <Route path='/login' exact={true}> */}
              <Login />
              {/* </Route> */}
            </ProtectedRoute>
            <ProtectedRoute path='/register' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              {/* <Route path='/register' exact={true}> */}
              <Register />
              {/* </Route> */}
            </ProtectedRoute>
            <ProtectedRoute path='/forgot-password' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              {/* <Route path='/forgot-password' exact={true}> */}
              <ForgotPassword />
              {/* </Route> */}
            </ProtectedRoute>

            <ProtectedRoute path='/reset-password' exact={true} condition={!getCookie('refreshToken') && history.location.state?.fromForgotPassword} redirection={'/profile'}>
              {/* <Route path='/reset-password' exact={true}> */}
              <ResetPassword />
              {/* </Route> */}
            </ProtectedRoute>

            {/* <Route path={['/profile', '/profile/orders']} exact={true}> */}
            <ProtectedRoute path={['/profile', '/profile/orders']} exact={true} condition={getCookie('refreshToken')} redirection={'/login'}>
              <Profile />
            </ProtectedRoute>
            {/* </Route> */}
            <Route path='/feed' exact={true}>
              <Feed />
            </Route>
          </Switch>
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

      {/* <OrderHistory /> */}
      {/* <Feed /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
