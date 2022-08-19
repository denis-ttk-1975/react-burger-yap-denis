import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ProfileNav from '../../components/profile-nav/profile-nav';
import OrderHistoryData from '../../components/order-history-data/order-history-data';

import styles from './order-history.module.css';

function OrderHistory() {
  return (
    <div className={`${styles.profileBox}`}>
      <ProfileNav />
      <OrderHistoryData />
    </div>
  );
}

export default OrderHistory;
