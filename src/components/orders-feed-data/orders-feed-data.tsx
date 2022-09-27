import React from 'react'; // импорт библиотеки
import { useSelector } from 'react-redux';

import styles from './orders-feed-data.module.css';

import OrdersFeedCard from '../orders-feed-card/orders-feed-card';

import { TIngredientElement } from './../../services/types/types';

type TOrdersFeedDataProps = { name: string; status: string; price: number; number: number; _id: string; ingredients: string[]; createdAt: string }[];

// whole component
function OrdersFeedData({ orders }: { orders: TOrdersFeedDataProps }) {
  const { menuIngredients: ingredientList } = useSelector((state: { burgerIngredients: { menuIngredients: TIngredientElement[] } }) => state.burgerIngredients);

  const billetArray = !!orders
    ? [
        ...orders.sort((a, b) => {
          if (a.number < b.number) {
            return 1;
          }

          return -1;
        }),
      ]
    : [];

  return (
    <div className={`${styles.ordersFeed}`}>
      <h1 className={`${styles.ordersFeedTitle} text text_type_main-large`}>Лента заказов</h1>
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

            const price = itemList.reduce((acc, item) => {
              return item?.type === 'bun' ? acc + 2 * Number(item?.price) : acc + Number(item?.price);
            }, 0);

            return <OrdersFeedCard key={order._id} number={`#${order.number}`} date={date} title={order.name} status={order.status} data={itemList} price={price} id={order._id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default OrdersFeedData;
