import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-ingredients.module.css';

function OrderIngredients(props) {
  const statusFieldStyle =
    props.status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <div className={styles.mainModal}>
      <p className={`${styles.orderNumber} text text_type_main-medium`}>#999999</p>
      <p className={`${styles.orderName} text text_type_main-medium`}>Death Star Starship Main бургер</p>
      <p className={statusFieldStyle}>Выполнен</p>
      <p className={`${styles.ingredientsHeader} text text_type_main-medium`}>Состав:</p>
      <div className={`${styles.footer} text text_type_main-medium`}>
        <p className={`${styles.ordersDate} text text_type_main-default text_color_inactive`}>Вчера, 13:50 i-GMT+3</p>

        <div className={`${styles.orderCard_price}`}>
          <p className='text text_type_digits-medium'>480</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

OrderIngredients.propTypes = {
  dataModal: PropTypes.string.isRequired,
};

export default OrderIngredients;
