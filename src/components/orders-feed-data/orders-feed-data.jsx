import React from 'react'; // импорт библиотеки

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './orders-feed-data.module.css';

import OrdersFeedCard from './../orders-feed-card/orders-feed-card';

// whole component
function OrdersFeedData({ orders }) {
  console.log('props from OrdersFeedData', orders);
  return (
    <div className={`${styles.ordersFeed}`}>
      <h1 className={`${styles.ordersFeedTitle} text text_type_main-large`}>Лента заказов</h1>
      <div className={styles.scrollBox}>
        {orders.map((elem) => {
          if (!!elem._id) {
            const orderDate = new Date(Date.parse(elem.createdAt));

            const currentDate = new Date();

            const date = orderDate.getDate() === currentDate.getDate() ? `Сегодня, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3` : 2;

            return (
              <OrdersFeedCard
                key={elem._id}
                number={`#${elem.number}`}
                date={date}
                title={elem.name}
                status={elem.status}
                data={[
                  { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
                  { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
                  { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
                ]}
                onClick={() => alert('You clicked on order card')}
                price='480'
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
