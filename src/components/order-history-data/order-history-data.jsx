import React from 'react'; // импорт библиотеки

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-history-data.module.css';

import OrderCard from './../order-card/order-card';

// whole component
function OrderHistoryData(props) {
  return (
    <div className={styles.scrollBox}>
      <OrderCard
        number='#000538'
        date='Сегодня, 16:20 i-GMT+3'
        title='Death Star Starship Main бургер'
        status='Выполнен'
        data={[
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
        ]}
        onClick={() => alert('You clicked on order card')}
        price='480'
      />
      <OrderCard
        number='#000538'
        date='Сегодня, 16:20 i-GMT+3'
        title='Death Star Starship Main бургер'
        status='Выполнен'
        data={[
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
        ]}
        onClick={() => alert('You clicked on order card')}
        price='480'
      />
      <OrderCard
        number='#000538'
        date='Сегодня, 16:20 i-GMT+3'
        title='Death Star Starship Main бургер'
        status='Выполнен'
        data={[
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
        ]}
        onClick={() => alert('You clicked on order card')}
        price='480'
      />
      <OrderCard
        number='#000538'
        date='Сегодня, 16:20 i-GMT+3'
        title='Death Star Starship Main бургер'
        status='Выполнен'
        data={[
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
        ]}
        onClick={() => alert('You clicked on order card')}
        price='480'
      />
      <OrderCard
        number='#000538'
        date='Сегодня, 16:20 i-GMT+3'
        title='Death Star Starship Main бургер'
        status='Выполнен'
        data={[
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png' },
          { image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png' },
        ]}
        onClick={() => alert('You clicked on order card')}
        price='480'
      />
    </div>
  );
}

export default OrderHistoryData;
