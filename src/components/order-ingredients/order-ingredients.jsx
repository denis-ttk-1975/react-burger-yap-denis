import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-ingredients.module.css';

import { wsUserOrdersInfo, wsAllOrdersInfo } from './../../utils/url';
import { wsConnect, wsDisconnect } from './../../services/actions/websocket';
import { getCookie } from './../../utils/getCookie';

function OrderIngredients(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const wsConnectLink = props.owner === 'user' ? { wsUrl: wsUserOrdersInfo, token: getCookie('accessToken') } : { wsUrl: wsAllOrdersInfo, token: null };
    dispatch(wsConnect(wsConnectLink.wsUrl, wsConnectLink.token));
    return () => {
      dispatch(wsDisconnect());
    };
  }, []);

  const params = useParams();

  const { data: orderTable } = useSelector((state) => state.orderTable);

  const { menuIngredients: ingredientList } = useSelector((state) => state.burgerIngredients);

  const billetData = props.owner === 'user' ? orderTable?.orders.find((item) => item._id === params.id) : orderTable?.orders.find((item) => item._id === params.id);

  if (!billetData) return null;

  const statusMapping = { done: 'Выполнен', preparing: 'Готовится', created: 'Создан', deleted: 'Отменен' };

  const styleHeader = props.center ? `${styles.orderNumber} text text_type_digits-default ${styles.center}` : `${styles.orderNumber} text text_type_digits-default`;

  const orderDate = new Date(Date.parse(billetData.createdAt));
  const currentDate = new Date();
  const date =
    orderDate.getDate() === currentDate.getDate() ? `Сегодня, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3` : `Вчера, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3`;
  const itemList = billetData.ingredients.map((item) => {
    return ingredientList.find((elem) => elem._id === item.toString());
  });

  const prepareIngredientDataArray = (array, ingredientsData) => {
    const uniqElemArray = Array.from(new Set(array));
    let result = uniqElemArray.map((item) => {
      return ingredientsData.find((elem) => elem._id === item.toString());
    });
    result = result.map((item) => {
      const amountIngredient = array.filter((elem) => elem.toString() === item._id.toString()).length;
      return { ...item, amount: amountIngredient };
    });
    result = result.map((item) => {
      if (item.type === 'bun') {
        return { ...item, amount: 2 };
      } else {
        return { ...item };
      }
    });

    return result;
  };

  const ingredientDataArray = prepareIngredientDataArray(billetData.ingredients, ingredientList);

  const price = ingredientDataArray.reduce((acc, item) => {
    return acc + Number(item.price) * Number(item.amount);
  }, 0);

  const statusFieldStyle =
    billetData.status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <div className={styles.mainModal}>
      <p className={`${styleHeader} `}>#{billetData.number}</p>
      <p className={`${styles.orderName} text text_type_main-medium`}>{billetData.name}</p>
      <p className={statusFieldStyle}>{statusMapping[billetData.status]}</p>
      <p className={`${styles.ingredientsHeader} text text_type_main-medium`}>Состав:</p>
      <div className={styles.scrollBoxWrap}>
        <div className={styles.scrollBox}>
          {ingredientDataArray.map((elem) => {
            return (
              <div className={styles.ingredientBox} key={elem._id}>
                <div className={styles.spaceAround}>
                  <div className={`${styles.ingredientImageWrap}`}>
                    <img src={elem.image_mobile} alt={elem.name} className={`${styles.ingredientImage}`} />
                  </div>
                  <p className={`${styles.ingredientsName} text text_type_main-default`}>{elem.name}</p>
                </div>
                <div className={styles.spaceAround}>
                  <p className={`${styles.ingredientsAmountPrice} text text_type_digits-default`}>
                    {elem.amount} x {elem.price}
                  </p>
                  <CurrencyIcon type='primary' />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.footer} text text_type_main-medium`}>
        <p className={`${styles.ordersDate} text text_type_main-default text_color_inactive`}>{date}</p>

        <div className={`${styles.orderCard_price}`}>
          <p className='text text_type_digits-default'>{price}</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

// OrderIngredients.propTypes = {
//   dataModal: PropTypes.string.isRequired,
// };

export default OrderIngredients;
