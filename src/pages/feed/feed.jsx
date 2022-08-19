import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrdersFeedData from '../../components/orders-feed-data/orders-feed-data';
import OrdersSummary from '../../components/orders-summary/orders-summary';

import styles from './feed.module.css';

function Feed() {
  return (
    <div className={`${styles.feedBox}`}>
      <OrdersFeedData />
      <OrdersSummary />
    </div>
  );
}

export default Feed;
