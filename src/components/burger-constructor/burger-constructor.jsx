import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, CurrencyIcon, DragIcon, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

// import data from './../../utils/data';

function ElemTop(props) {
  return (
    <div className={styles.elemTop}>
      <ConstructorElement type='top' isLocked={true} text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

function ElemBottom(props) {
  return (
    <div className={styles.elemBottom}>
      <ConstructorElement type='bottom' isLocked={true} text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

function ElemList(props) {
  return (
    <div className={styles.elemList}>
      <div className='pr-2'>
        <DragIcon type='primary' />
      </div>
      <ConstructorElement text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

function TotalOrder(props) {
  return <div className={styles.totalOrder}></div>;
}

function BurgerConstructor(props) {
  const bunElement = props.data.find((elem) => {
    if (elem.type === 'bun' && elem.__v === 1) {
      return true;
    }
  });

  const parseOrderList = (array) => {
    let result = [];
    array.forEach((elem, index) => {
      for (let i = 1; i <= elem.__v; i++) {
        result.push({ name: elem.name, price: elem.price, image: elem.image_mobile });
      }
    });
    console.log(result);
    return result;
  };

  const ingredientsArray = props.data.filter((elem) => elem.type !== 'bun' && elem.__v > 0);

  const ingredientList = parseOrderList(ingredientsArray);

  const sumTotalBill = (array, bunElem) => {
    const result =
      bunElem.price * 2 +
      array.reduce(function (sum, current) {
        return sum + current.price;
      }, 0);
    return result;
  };

  const amountTotalBill = sumTotalBill(ingredientList, bunElement);

  return (
    <div className={`mt-25 ${styles.constructorArea}`}>
      <ElemTop name={bunElement.name + ' (верх)'} price={bunElement.price} image={bunElement.image_mobile} />
      <div className={styles.innerList}>
        {ingredientList.map((elem, index) => {
          return <ElemList name={elem.name} price={elem.price} image={elem.image} key={index} className='pr-4' />;
        })}
      </div>
      <ElemBottom name={bunElement.name + ' (низ)'} price={bunElement.price} image={bunElement.image_mobile} />
      <div className={`${styles.orderArea} mt-10 pr-4`}>
        <div className={`${styles.sumArea} mr-10`}>
          <p className='text text_type_digits-medium pr-2'>{amountTotalBill}</p>

          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='large'>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
