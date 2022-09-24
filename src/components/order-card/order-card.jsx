import React from 'react'; // импорт библиотеки
import { Link, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { Box, Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-card.module.css';

const statusMapping = { done: 'Выполнен', preparing: 'Готовится', created: 'Создан', deleted: 'Отменен' };

const OrderCard = ({ number, date, title, status, data, price, id }) => {
  const location = useLocation();
  const statusFieldStyle = status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <Link className={`${styles.ordersCardLink}`} to={{ pathname: `/profile/orders/${id}`, state: { background: location } }}>
      <div className={`${styles.orderCard}`}>
        <div className={`${styles.orderCard_header}`}>
          <p className={`${styles.orderCard_number} text text_type_digits-default`}>{number}</p>
          <p className={`${styles.orderCard_date} text text_type_main-default text_color_inactive`}>{date}</p>
        </div>
        <div className={`${styles.orderCard_title} text text_type_main-medium`}>{title}</div>
        <div className={`${statusFieldStyle}`}>{statusMapping[status]}</div>
        <div className={`${styles.orderCard_footer}`}>
          <div className={`${styles.orderCard_ingredients}`}>
            {data.map((elem, index, arr) => {
              const shiftValue = {
                transform: `translateX(${24 * (index - arr.length + 1)}px)`,
              };
              return (
                <div style={shiftValue} className={`${styles.orderCard_ingredientImageWrap}`} key={nanoid()}>
                  <img src={elem.image_mobile} alt='round' className={`${styles.orderCard_ingredientImage}`} />
                </div>
              );
            })}
          </div>
          <div className={`${styles.orderCard_price}`}>
            <p className='text text_type_digits-medium'>{price}</p>

            <CurrencyIcon type='primary' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
