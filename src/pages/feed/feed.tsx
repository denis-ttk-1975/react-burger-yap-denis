import React, { useEffect } from 'react'; // импорт библиотеки

import { useSelector } from './../../services/store';
import { useDispatch } from './../../services/store';

import OrdersFeedData from '../../components/orders-feed-data/orders-feed-data';
import OrdersSummary from '../../components/orders-summary/orders-summary';

import { wsConnect, wsDisconnect } from '../../services/actions/websocket';

import { wsAllOrdersInfo } from '../../utils/url';

import styles from './feed.module.css';

function Feed() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: { orderTable: { data: { orders: []; total: number; totalToday: number } } }) => state.orderTable);

  useEffect(() => {
    dispatch(wsConnect(wsAllOrdersInfo, null));
    return () => {
      dispatch(wsDisconnect());
    };
  }, []);
  console.log('Orders:', data?.orders);
  return (
    <>
      {!!data?.total && !!data?.totalToday && !!data?.orders && (
        <div className={`${styles.feedBox}`}>
          <OrdersFeedData orders={data.orders} />
          <OrdersSummary orders={data.orders} total={data.total} totalToday={data.totalToday} />
        </div>
      )}
    </>
  );
}

export default Feed;
