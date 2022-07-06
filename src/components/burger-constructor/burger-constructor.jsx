import React, { useContext } from 'react'; // импорт библиотеки

import { BurgerConstructorContext } from './../../context/BurgerContext';

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import ElemTop from './../elem-top/elem-top';
import ElemBottom from './../elem-bottom/elem-bottom';
import ElemList from './../elem-list/elem-list';

import testData from './../../utils/data';
import { NewLineKind } from 'typescript';

function BurgerConstructor(props) {
  const { orderIngredients, setOrderIngredients } = useContext(BurgerConstructorContext);

  const amountBunCheck = (arrayIngredients) => {
    if (arrayIngredients.filter((elem) => elem.type === 'bun' && elem.__v > 0).length > 1) {
      alert('Вы выбрали больше чем одну булку, выберите один вид булки');
    }
    return [...arrayIngredients.filter((elem) => elem.type === 'bun')][0];
  };

  const bunElement = amountBunCheck(orderIngredients);

  const ingredientsArray = [...orderIngredients.filter((elem) => elem.type !== 'bun' && elem.__v > 0)];

  const prepareBurgerArray = (bunObject, ingredientsArray) => {
    let result = [];
    if (bunObject && ingredientsArray) {
      const removeKey = ({ __v, ...rest }) => rest;
      bunObject = removeKey(bunObject);
      result.push({ ...bunObject, name: `${bunObject.name} (верх)` });
      ingredientsArray.forEach((elem) => {
        const newElem = removeKey(elem);
        for (let j = 0; j < elem.__v; j++) {
          result.push(newElem);
        }
      });
      result.push({ ...bunObject, name: `${bunObject.name} (низ)` });
    }
    return result;
  };

  const burgerOrderArray = prepareBurgerArray(bunElement, ingredientsArray);
  console.log(' burgerOrderArray: ', burgerOrderArray);

  const sumTotalBill = (array) => {
    let result = 0;
    if (array) {
      array.forEach((item) => {
        result = result + item.price;
      });
    }

    return result;
  };

  const amountTotalBill = sumTotalBill(burgerOrderArray);

  return (
    <div className={`mt-25 ${styles.constructorArea}`}>
      {burgerOrderArray.length && burgerOrderArray[0]['type'] === 'bun' && burgerOrderArray[0]['name'].includes('(верх)') && (
        <ElemTop name={burgerOrderArray[0]['name']} price={burgerOrderArray[0]['price']} image={burgerOrderArray[0]['image_mobile']} />
      )}
      {burgerOrderArray.length && (
        <div className={styles.innerList}>
          {burgerOrderArray.map((elem, index) => {
            if (elem.type !== 'bun') {
              return <ElemList name={elem.name} price={elem.price} image={elem.image} key={index} className='pr-4' />;
            }
          })}
        </div>
      )}
      {burgerOrderArray.length && burgerOrderArray[burgerOrderArray.length - 1]['type'] === 'bun' && burgerOrderArray[burgerOrderArray.length - 1]['name'].includes('(низ)') && (
        <ElemBottom
          name={burgerOrderArray[burgerOrderArray.length - 1]['name']}
          price={burgerOrderArray[burgerOrderArray.length - 1]['price']}
          image={burgerOrderArray[burgerOrderArray.length - 1]['image_mobile']}
        />
      )}

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
  onClickMakeOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
