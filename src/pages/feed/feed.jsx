import React, { useEffect } from 'react'; // импорт библиотеки
import { BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch, useLocation, useParams, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrdersFeedData from '../../components/orders-feed-data/orders-feed-data';
import OrdersSummary from '../../components/orders-summary/orders-summary';
import OrderIngredients from './../../components/order-ingredients/order-ingredients';

import { wsFeedConnect, wsFeedDisconnect } from './../../services/actions/feed-page-socket';
import { wsAllOrdersInfo } from './../../utils/url';

import styles from './feed.module.css';

function Feed() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.feed);
  const location = useLocation();
  const background = location?.state?.background;

  useEffect(() => {
    dispatch(wsFeedConnect(wsAllOrdersInfo));
    return () => {
      dispatch(wsFeedDisconnect());
    };
  }, []);

  return (
    <>
      {!!data?.total && !!data?.totalToday && !!data?.orders && (
        <div className={`${styles.feedBox}`}>
          <OrdersFeedData orders={data.orders} />
          <OrdersSummary orders={data.orders} total={data.total} totalToday={data.totalToday} />
        </div>
      )}
    </>
  );
}

export default Feed;
