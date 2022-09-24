import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-history-data.module.css';

import OrderCard from './../order-card/order-card';

import { wsConnect, wsDisconnect } from './../../services/actions/websocket';

import { wsUserOrdersInfo } from './../../utils/url';
import { getCookie } from './../../utils/getCookie';

// whole component
function OrderHistoryData(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderTable);
  const { menuIngredients: ingredientList } = useSelector((state) => state.burgerIngredients);

  const billetArray = !!data?.orders
    ? [
        ...data?.orders.sort((a, b) => {
          if (a.number < b.number) {
            return 1;
          }

          return -1;
        }),
      ]
    : [];

  useEffect(() => {
    dispatch(wsConnect(wsUserOrdersInfo, getCookie('accessToken')));
    return () => {
      dispatch(wsDisconnect());
    };
  }, []);

  return (
    <>
      {!!billetArray && (
        <div className={styles.scrollBox}>
          {billetArray.map((order) => {
            if (!!order._id) {
              const orderDate = new Date(Date.parse(order.createdAt));
              const currentDate = new Date();
              const date =
                orderDate.getDate() === currentDate.getDate()
                  ? `Сегодня, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3`
                  : `Вчера, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3`;
              const itemList = order.ingredients.map((item) => {
                return ingredientList.find((elem) => elem._id === item.toString());
              });
              const price = itemList.reduce((acc, item) => acc + Number(item.price), 0);

              return (
                <OrderCard
                  key={order._id}
                  number={`#${order.number}`}
                  date={date}
                  title={order.name}
                  status={order.status}
                  data={itemList}
                  onClick={() => alert('You clicked on order card')}
                  price={price}
                  id={order._id}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default OrderHistoryData;
