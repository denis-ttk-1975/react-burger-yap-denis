import React from 'react'; // импорт библиотеки
import { BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch, useParams, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { Box, Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './orders-feed-card.module.css';

const OrdersFeedCard = ({ number, date, title, status, data, price, onClick, id }) => {
  const location = useLocation();
  const billetArray =
    data.length > 6
      ? data
          .map((elem, index) => {
            return index !== 5 ? { ...elem } : { ...elem, restAmount: data.length - 6 };
          })
          .slice(0, 6)
      : [...data];

  return (
    <Link className={`${styles.ordersFeedCardLink}`} to={{ pathname: `/feed/${id}`, state: { background: location } }}>
      <div className={`${styles.ordersFeedCard}`} onClick={onClick}>
        <div className={`${styles.ordersFeedCard_header}`}>
          <p className={`${styles.ordersFeedCard_number} text text_type_digits-default`}>{number}</p>
          <p className={`${styles.ordersFeedCard_date} text text_type_main-default text_color_inactive`}>{date}</p>
        </div>
        <div className={`${styles.ordersFeedCard_title} text text_type_main-medium`}>{title}</div>
        {/* <div className={`${styles.ordersFeedCard_status} text text_type_main-default`}>{status}</div> */}
        <div className={`${styles.ordersFeedCard_footer}`}>
          <div className={`${styles.ordersFeedCard_ingredients}`}>
            {billetArray.reverse().map((elem, index, arr) => {
              const shiftValue = {
                transform: `translateX(${16 * (index - arr.length + 1)}px)`,
              };
              return (
                <div style={shiftValue} className={`${styles.ordersFeedCard_ingredientImageWrap}`} key={nanoid()}>
                  <img src={elem.image_mobile} alt='round' className={`${styles.ordersFeedCard_ingredientImage}`} />
                  {elem?.restAmount && <p className={`${styles.ordersFeedCard_restIngredients} text text_type_digits-default`}>+{elem.restAmount}</p>}
                </div>
              );
            })}
          </div>
          <div className={`${styles.ordersFeedCard_price}`}>
            <p className='text text_type_digits-default'>{price}</p>

            <CurrencyIcon type='primary' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrdersFeedCard;
