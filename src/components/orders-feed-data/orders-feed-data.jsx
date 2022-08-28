import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './orders-feed-data.module.css';

import OrdersFeedCard from './../orders-feed-card/orders-feed-card';

// whole component
function OrdersFeedData({ orders }) {
  const { menuIngredients: ingredientList } = useSelector((state) => state.burgerIngredients);

  return (
    <div className={`${styles.ordersFeed}`}>
      <h1 className={`${styles.ordersFeedTitle} text text_type_main-large`}>Лента заказов</h1>
      <div className={styles.scrollBox}>
        {orders.map((order) => {
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
              <OrdersFeedCard
                key={order._id}
                number={`#${order.number}`}
                date={date}
                title={order.name}
                status={order.status}
                data={itemList}
                onClick={() => alert('You clicked on order card')}
                price={price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default OrdersFeedData;
