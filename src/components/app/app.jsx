import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { setIngredientItemForModal, resetIngredientItemForModal, setOpenForIngredientModal, setCloseForIngredientModal } from './../../services/actions/ingredient-details';
import { resetOrderNumberForModal, setOpenForOrderModal, setCloseForOrderModal } from './../../services/actions/order-details';

import Preloader from './../preloader/preloader';
import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import OrderDetails from './../order-details/order-details';
import OrderIngredients from './../order-ingredients/order-ingredients';

import Login from './../../pages/login/login';
import Register from './../../pages/register/register';
import ForgotPassword from './../../pages/forgot-password/forgot-password';
import ResetPassword from './../../pages/reset-password/reset-password';
import Profile from './../../pages/profile/profile';
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
  const { bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const background = location?.state?.background;

  // getting data about ingredients from server

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  // load data for order-ingredients
  useEffect(() => {
    dispatch(setBurgerIngredients([]));
  }, [dispatch]);

  // handling for Make-Order-Button

  const clickOrderDetailsHandler = (bunElement, stuffingArray) => {
    if (Object.keys(bunElement).length === 0) {
      alert('Добавьте булку');
    } else if (!stuffingArray.length) {
      alert('Добавьте хотя бы один ингредиент');
    } else if (!getCookie('refreshToken')) {
      dispatch(setBurgerIngredients([bunElement, ...stuffingArray]));
      // <Redirect to={{ pathname: '/login', state: { from: location } }} />;
      history.push({ pathname: '/login', state: { from: location } });
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

  return (
    <>
      {(isLoadingIngredients || isLoadingOrderDetails) && <Preloader />}
      <AppHeader />
      {!isLoadingIngredients && (
        <main className={styles.main}>
          <Switch location={background || location}>
            <Route path='/' exact={true}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients onClickIngredientsItem={clickIngredientItemHandler} />
                <BurgerConstructor onClickMakeOrder={() => clickOrderDetailsHandler(bun, stuffing)} />
              </DndProvider>
            </Route>
            <ProtectedRoute path='/login' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              <Login />
            </ProtectedRoute>
            <ProtectedRoute path='/register' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              <Register />
            </ProtectedRoute>
            <ProtectedRoute path='/forgot-password' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              <ForgotPassword />
            </ProtectedRoute>

            <ProtectedRoute path='/reset-password' exact={true} condition={!getCookie('refreshToken')} redirection={'/profile'}>
              <ResetPassword />
            </ProtectedRoute>

            <ProtectedRoute path={['/profile', '/profile/orders']} exact={true} condition={getCookie('refreshToken')} redirection={'/login'}>
              <Profile />
            </ProtectedRoute>
            <Route path='/feed' exact={true}>
              <Feed />
            </Route>
            <Route path='/ingredients/:id' exact={true}>
              {!!menuIngredients && <IngredientDetails center />}
            </Route>
            <Route path='/feed/:id' exact={true}>
              <>
                <OrderIngredients owner={'common'} center />
              </>
            </Route>
            <ProtectedRoute path={'/profile/orders/:id'} exact={true} condition={getCookie('refreshToken')} redirection={'/login'}>
              <OrderIngredients owner={'user'} center />
            </ProtectedRoute>
          </Switch>
          {isOrderModalOpen && !isLoadingOrderDetails && !errorMessageOrderDetails && (
            <Modal closeAllModals={closeAllModals}>
              <OrderDetails dataModal={orderNumber} />
            </Modal>
          )}
          {background && !!menuIngredients && (
            <Route path='/ingredients/:id' exact={true}>
              <Modal closeAllModals={() => history.goBack()}>
                <IngredientDetails />
              </Modal>
            </Route>
          )}

          {background && (
            <Route path='/feed/:id' exact={true}>
              <Modal closeAllModals={() => history.goBack()}>
                <OrderIngredients owner={'common'} />
              </Modal>
            </Route>
          )}
          {background && (
            <Route path='/profile/orders/:id' exact={true}>
              <Modal closeAllModals={() => history.goBack()}>
                <OrderIngredients owner={'user'} />
              </Modal>
            </Route>
          )}
        </main>
      )}
    </>
  );
}

export default App;
