import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector } from './../../services/store';
import { useDispatch } from './../../services/store';

import styles from './order-history-data.module.css';

import OrderCard from '../order-card/order-card';

import { wsConnect, wsDisconnect } from '../../services/actions/websocket';

import { wsUserOrdersInfo } from '../../utils/url';
import { getCookie } from '../../utils/getCookie';

import { TIngredientElement } from './../../services/types/types';

// whole component
function OrderHistoryData() {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: { orderTable: { data: { orders: { name: string; status: string; price: number; number: number; _id: string; ingredients: string[]; createdAt: string }[] } } }) => state.orderTable
  );
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
              const itemList = order.ingredients
                .map((item) => {
                  return ingredientList.find((elem) => elem._id === item.toString());
                })
                .filter((el) => {
                  return el !== undefined;
                });

              if (!itemList.length) {
                return null;
              }
              const price = !!itemList ? itemList.reduce((acc, item) => acc + Number(item?.price), 0) : 0;

              return <OrderCard key={order._id} number={`#${order.number}`} date={date} title={order.name} status={order.status} data={itemList} price={price} id={order._id} />;
            }
          })}
        </div>
      )}
    </>
  );
}

export default OrderHistoryData;
