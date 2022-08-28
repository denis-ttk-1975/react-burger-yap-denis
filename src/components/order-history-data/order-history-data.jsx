import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-history-data.module.css';

import OrderCard from './../order-card/order-card';

import { wsOrderHistoryConnect, wsOrderHistoryDisconnect } from './../../services/actions/order-history-socket';
import { wsUserOrdersInfo } from './../../utils/url';

// whole component
function OrderHistoryData(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.orderHistory);
  console.log('data: ', data);

  useEffect(() => {
    dispatch(wsOrderHistoryConnect(wsUserOrdersInfo));
    return () => {
      dispatch(wsOrderHistoryDisconnect());
    };
  }, [dispatch]);

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
