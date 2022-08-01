import React from 'react'; // импорт библиотеки
import { nanoid } from 'nanoid';

import dataTest from './orders-test-data';

import { Box, Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-recipe.module.css';

// whole component
const OrdersRecipe = ({ number, date, title, status, data, price, onClick }) => {
  return (
    <div className={`${styles.orderRecipe}`} onClick={onClick}>
      <p className={`${styles.orderRecipe_number} text text_type_digits-default`}>{number}</p>

      <div className={`${styles.orderRecipe_title} text text_type_main-medium`}>{title}</div>
      <div className={`${styles.orderRecipe_status} text text_type_main-default`}>{status}</div>
      <div className={`${styles.orderRecipe_ingredients}`}>
        {dataTest.orders[0].ingredients.map((elem, index, arr) => {
          return (
            <div className={`${styles.orderRecipeItemWrap}`} key={nanoid()}>
              {elem}
              {/* <img src={elem.image_mobile} alt='round' className={`${styles.orderCard_ingredientImage}`} /> */}
            </div>
          );
        })}
      </div>
      <div className={`${styles.orderRecipe_footer}`}>
        <p className={`${styles.orderRecipe_date} text text_type_main-default text_color_inactive`}>{date}</p>

        <div className={`${styles.orderRecipe_price}`}>
          <p className='text text_type_digits-medium'>{price}</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrdersRecipe;
