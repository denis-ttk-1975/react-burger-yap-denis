import React from 'react'; // импорт библиотеки

import { Box, Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-card.module.css';

const OrderCard = ({ number, date, title, status, data, price, onClick }) => {
  return (
    <div className={`${styles.orderCard}`} onClick={onClick}>
      <div className={`${styles.orderCard_header}`}>
        <p>{number}</p>
        <p>{date}</p>
      </div>
      <div className={`${styles.orderCard_title}`}>{title}</div>
      <div className={`${styles.orderCard_status}`}>{status}</div>
      <div className={`${styles.orderCard_footer}`}>
        <div className={`${styles.orderCard_ingredients}`}>
          <img src={data} alt='round' />
        </div>
        <div className={`${styles.orderCard_price}`}>
          <p className='text text_type_digits-medium'>{price}</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
