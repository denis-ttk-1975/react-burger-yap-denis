import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Typography, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-ingredients.module.css';

function OrderIngredients(props) {
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

  const statusFieldStyle =
    props.status !== 'done' ? `text text_type_main-default ${styles.orderCard_status}` : `text text_type_main-default ${styles.orderCard_status} ${styles.orderCard_status_done}`;

  return (
    <div className={styles.mainModal}>
      <p className={`${styles.orderNumber} text text_type_digits-default`}>#999999</p>
      <p className={`${styles.orderName} text text_type_main-medium`}>Death Star Starship Main бургер</p>
      <p className={statusFieldStyle}>Выполнен</p>
      <p className={`${styles.ingredientsHeader} text text_type_main-medium`}>Состав:</p>
      <div className={styles.scrollBoxWrap}>
        <div className={styles.scrollBox}>
          {data.map((elem) => {
            return (
              <div className={styles.ingredientBox}>
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
        <p className={`${styles.ordersDate} text text_type_main-default text_color_inactive`}>Вчера, 13:50 i-GMT+3</p>

        <div className={`${styles.orderCard_price}`}>
          <p className='text text_type_digits-default'>480</p>

          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

OrderIngredients.propTypes = {
  dataModal: PropTypes.string.isRequired,
};

export default OrderIngredients;
