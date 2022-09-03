import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch, useParams, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-ingredients.module.css';

function OrderIngredients(props) {
  const params = useParams();
  const { data: ordersData } = useSelector((state) => state.feed);
  const { menuIngredients: ingredientList } = useSelector((state) => state.burgerIngredients);

  const billetData = ordersData.orders.find((item) => item._id === params.id);
  console.log('billetData: ', billetData);

  const statusMapping = { done: 'Выполнен', preparing: 'Готовится', created: 'Создан', deleted: 'Отменен' };

  const data = [
    {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      amount: 2,
      price: 988,
    },

    {
      _id: '60d3b41abdacab0026a733c8',
      name: 'Филе Люминесцентного тетраодонтимформа',
      type: 'main',
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      amount: 1,
      price: 1988,
    },
    {
      _id: '60d3b41abdacab0026a733c9',
      name: 'Мясо бессмертных моллюсков Protostomia',
      type: 'main',
      image: 'https://code.s3.yandex.net/react/code/meat-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
      amount: 1,
      price: 288,
    },
    {
      _id: '60d3b41abdacab0026a733ca',
      name: 'Говяжий метеорит (отбивная)',
      type: 'main',
      image: 'https://code.s3.yandex.net/react/code/meat-04.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
      amount: 1,
      price: 388,
    },
    {
      _id: '60d3b41abdacab0026a733cb',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
      amount: 3,
      price: 588,
    },
    {
      _id: '60d3b41abdacab0026a733cc',
      name: 'Соус Spicy-X',
      type: 'sauce',
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
      amount: 2,
      price: 688,
    },
    {
      _id: '60d3b41abdacab0026a733cd',
      name: 'Соус фирменный Space Sauce',
      type: 'sauce',
      image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
      amount: 1,
      price: 788,
    },
    {
      _id: '60d3b41abdacab0026a733ce',
      name: 'Соус традиционный галактический',
      type: 'sauce',
      image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
      amount: 1,
      price: 985,
    },
    {
      _id: '60d3b41abdacab0026a733cf',
      name: 'Соус с шипами Антарианского плоскоходца',
      type: 'sauce',
      image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
      amount: 1,
      price: 981,
    },
  ];

  const orderDate = new Date(Date.parse(billetData.createdAt));
  const currentDate = new Date();
  const date =
    orderDate.getDate() === currentDate.getDate() ? `Сегодня, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3` : `Вчера, ${orderDate.getHours()}:${orderDate.getMinutes()}  i-GMT+3`;
  const itemList = billetData.ingredients.map((item) => {
    return ingredientList.find((elem) => elem._id === item.toString());
  });

  const price = itemList.reduce((acc, item) => {
    return item.type === 'bun' ? acc + 2 * Number(item.price) : acc + Number(item.price);
  }, 0);

  const statusFieldStyle =
    billetData.status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <div className={styles.mainModal}>
      <p className={`${styles.orderNumber} text text_type_digits-default`}>#{billetData.number}</p>
      <p className={`${styles.orderName} text text_type_main-medium`}>{billetData.name}</p>
      <p className={statusFieldStyle}>{statusMapping[billetData.status]}</p>
      <p className={`${styles.ingredientsHeader} text text_type_main-medium`}>Состав:</p>
      <div className={styles.scrollBoxWrap}>
        <div className={styles.scrollBox}>
          {billetData.ingredients.map((elem) => {
            const ingredientInfo = ingredientList.find((item) => item._id === elem);
            const amount = ingredientInfo.type === 'bun' ? 2 : 1;
            return (
              <div className={styles.ingredientBox} key={ingredientInfo._id}>
                <div className={styles.spaceAround}>
                  <div className={`${styles.ingredientImageWrap}`}>
                    <img src={ingredientInfo.image_mobile} alt={ingredientInfo.name} className={`${styles.ingredientImage}`} />
                  </div>
                  <p className={`${styles.ingredientsName} text text_type_main-default`}>{ingredientInfo.name}</p>
                </div>
                <div className={styles.spaceAround}>
                  <p className={`${styles.ingredientsAmountPrice} text text_type_digits-default`}>
                    {amount} x {ingredientInfo.price}
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
