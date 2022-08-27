import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrdersFeedData from '../../components/orders-feed-data/orders-feed-data';
import OrdersSummary from '../../components/orders-summary/orders-summary';

import { wsFeedConnect, wsFeedDisconnect } from './../../services/actions/feed-page-socket';
import { wsAllOrdersInfo } from './../../utils/url';

import styles from './feed.module.css';

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsFeedConnect(wsAllOrdersInfo));
    return () => {
      dispatch(wsFeedDisconnect());
    };
  }, [dispatch]);

  return (
    <div className={`${styles.feedBox}`}>
      <OrdersFeedData />
      <OrdersSummary />
    </div>
  );
}

export default Feed;
