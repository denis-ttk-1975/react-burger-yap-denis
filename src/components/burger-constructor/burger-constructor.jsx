import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import ElemTop from './../elem-top/elem-top';
import ElemBottom from './../elem-bottom/elem-bottom';
import ElemList from './../elem-list/elem-list';

function BurgerConstructor(props) {
  const bunElement = props.data.find((elem) => {
    if (elem.type === 'bun' && elem.__v === 1) {
      return true;
    }
    return false;
  });

  const ingredientsArray = props.data.filter((elem) => elem.type !== 'bun' && elem.__v > 0);

  const sumTotalBill = (array, bunElem) => {
    let result = 0;
    if (array) {
      console.log('array: ', array);
      array.forEach((item) => {
        if (item.type !== 'bun') {
          result = result + item.__v * item.price;
          console.log('result: ', result);
        }
      });
    }

    if (bunElem) {
      result = result + bunElem.price * 2;
      console.log('bunElem.price * 2: ', bunElem.price * 2);
    }
    return result;
  };

  const amountTotalBill = sumTotalBill(ingredientsArray, bunElement);

  return (
    <div className={`mt-25 ${styles.constructorArea}`}>
      {bunElement && <ElemTop name={bunElement.name + ' (верх)'} price={bunElement.price} image={bunElement.image_mobile} />}
      {ingredientsArray && (
        <div className={styles.innerList}>
          {ingredientsArray.map((elem, index) => {
            if (elem.type !== 'bun') {
              let i = elem.__v;
              do {
                return <ElemList name={elem.name} price={elem.price} image={elem.image} key={index} className='pr-4' />;
              } while (i > 0);
            }
          })}
        </div>
      )}
      {bunElement && <ElemBottom name={bunElement.name + ' (низ)'} price={bunElement.price} image={bunElement.image_mobile} />}
      <div className={`${styles.orderArea} mt-10 pr-4`}>
        <div className={`${styles.sumArea} mr-10`}>
          <p className='text text_type_digits-medium pr-2'>{amountTotalBill}</p>

          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='large' onClick={props.onClickMakeOrder}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
