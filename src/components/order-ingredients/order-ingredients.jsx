import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch, useParams, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-ingredients.module.css';

import { wsOrderHistoryConnect, wsOrderHistoryDisconnect } from './../../services/actions/order-history-socket';
import { wsUserOrdersInfo } from './../../utils/url';

function OrderIngredients(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsOrderHistoryConnect(wsUserOrdersInfo));
    return () => {
      dispatch(wsOrderHistoryDisconnect());
    };
  }, [dispatch]);

  const params = useParams();
  const { data: ordersData } = useSelector((state) => state.feed);
  const { data: userOrderHistory } = useSelector((state) => state.orderHistory);
  const { menuIngredients: ingredientList } = useSelector((state) => state.burgerIngredients);

  const billetData = props.owner === 'user' ? userOrderHistory?.orders.find((item) => item._id === params.id) : ordersData?.orders.find((item) => item._id === params.id);
  console.log('billetData: ', billetData);

  if (!billetData) return null;

  const statusMapping = { done: 'Выполнен', preparing: 'Готовится', created: 'Создан', deleted: 'Отменен' };

  const styleHeader = props.center ? `${styles.orderNumber} text text_type_digits-default ${styles.center}` : `${styles.orderNumber} text text_type_digits-default`;

  const orderDate = new Date(Date.parse(billetData.createdAt));
  const currentDate = new Date();
  const date =
    orderDate.getDate() === currentDate.getDate() ? `Сегодня, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3` : `Вчера, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3`;
  const itemList = billetData.ingredients.map((item) => {
    return ingredientList.find((elem) => elem._id === item.toString());
  });

  const price = itemList.reduce((acc, item) => {
    return item.type === 'bun' ? acc + 2 * Number(item.price) : acc + Number(item.price);
  }, 0);

  const statusFieldStyle =
    billetData.status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <div className={styles.mainModal}>
      <p className={`${styleHeader} `}>#{billetData.number}</p>
      <p className={`${styles.orderName} text text_type_main-medium`}>{billetData.name}</p>
      <p className={statusFieldStyle}>{statusMapping[billetData.status]}</p>
      <p className={`${styles.ingredientsHeader} text text_type_main-medium`}>Состав:</p>
      <div className={styles.scrollBoxWrap}>
        <div className={styles.scrollBox}>
          {billetData.ingredients.map((elem) => {
            const ingredientInfo = ingredientList.find((item) => item._id === elem);
            const amount = ingredientInfo.type === 'bun' ? 2 : 1;
            return (
              <div className={styles.ingredientBox} key={ingredientInfo._id}>
                <div className={styles.spaceAround}>
                  <div className={`${styles.ingredientImageWrap}`}>
                    <img src={ingredientInfo.image_mobile} alt={ingredientInfo.name} className={`${styles.ingredientImage}`} />
                  </div>
                  <p className={`${styles.ingredientsName} text text_type_main-default`}>{ingredientInfo.name}</p>
                </div>
                <div className={styles.spaceAround}>
                  <p className={`${styles.ingredientsAmountPrice} text text_type_digits-default`}>
                    {amount} x {ingredientInfo.price}
                  </p>
                  <CurrencyIcon type='primary' />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.footer} text text_type_main-medium`}>
        <p className={`${styles.ordersDate} text text_type_main-default text_color_inactive`}>{date}</p>

        <div className={`${styles.orderCard_price}`}>
          <p className='text text_type_digits-default'>{price}</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

// OrderIngredients.propTypes = {
//   dataModal: PropTypes.string.isRequired,
// };

export default OrderIngredients;
