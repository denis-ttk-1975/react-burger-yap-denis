import React from 'react'; // импорт библиотеки

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './orders-feed-data.module.css';

import OrdersFeedCard from './../orders-feed-card/orders-feed-card';

// whole component
function OrdersFeedData(props) {
  return (
    <div>
      <h1 className={`${styles.ordersFeedTitle} text text_type_main-large`}>Лента заказов</h1>
      <div className={styles.scrollBox}>
        <OrdersFeedCard
          number='#000538'
          date='Сегодня, 16:20 i-GMT+3'
          title='Death Star Starship Main бургер'
          status='Выполнен'
          data={[
            { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
            { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
            { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          ]}
          onClick={() => alert('You clicked on order card')}
          price='480'
        />
      </div>
    </div>
  );
}

export default OrdersFeedData;
