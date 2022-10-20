import React from 'react'; // импорт библиотеки

import styles from './orders-summary.module.css';

type TOrderSummaryProps = {
  orders: { status: string; _id: string; number: string | number }[];
  total: number;
  totalToday: number;
};

// whole component
function OrdersSummary(props: TOrderSummaryProps) {
  return (
    <div className={`${styles.ordersSummary}`}>
      <div className={`${styles.ordersSummaryLists} text `}>
        <div className={`${styles.ordersListArea} text `}>
          <h1 className={`${styles.ordersListTitle} text text_type_main-medium`}>Готовы:</h1>
          <ul className={`${styles.OrderItemWrap} `}>
            {props.orders
              .filter((elem) => elem.status === 'done')
              .map((elem, index) => {
                return (
                  <li className={`${styles.readyOrderItem} text text_type_digits-default `} key={elem._id}>
                    {elem.number}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={`${styles.ordersListArea} text text_type_main-large`}>
          <h1 className={`${styles.ordersListTitle} text text_type_main-medium`}>В работе:</h1>
          <ul className={`${styles.OrderItemWrap} `}>
            {props.orders
              .filter((elem) => elem.status === 'preparing')
              .map((elem, index) => {
                return (
                  <li className={`${styles.preparingOrderItem} text text_type_digits-default `} key={elem._id}>
                    {elem.number}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className={`${styles.ordersTotal} text `}>
        <h1 className={`${styles.ordersTotalTitle} text text_type_main-medium`}>Выполнено за все время:</h1>
        <p className={`${styles.ordersTotalText} text text_type_digits-large`}>{props.total}</p>
      </div>
      <div className={`${styles.ordersToday} text `}>
        <h1 className={`${styles.ordersTodayTitle} text text_type_main-medium`}>Выполнено сегодня:</h1>
        <p className={`${styles.ordersTodayText} text text_type_digits-large`}>{props.totalToday}</p>
      </div>
    </div>
  );
}

export default OrdersSummary;
