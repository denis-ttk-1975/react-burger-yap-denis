import React from 'react'; // импорт библиотеки

import styles from './order-details.module.css';
import orderAcceptedIcon from './../../images/order-accepted-icon.png';

function OrderDetails(props: { dataModal: string }) {
  return (
    <div className={styles.mainModal}>
      <p className={`text text_type_digits-large ${styles.idOrderNumber}`}>{props.dataModal}</p>
      <p className={`${styles.textOrderNumber} text text_type_main-medium`}>идентификатор заказа</p>
      <div className={styles.imageWrap}>
        <img src={orderAcceptedIcon} alt='Ваш заказ начали готовить' />
      </div>
      <p className={`${styles.textOrderConfirmation} text text_type_main-default `}>Ваш заказ начали готовить</p>
      <p className={`${styles.textPleaseWait} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
