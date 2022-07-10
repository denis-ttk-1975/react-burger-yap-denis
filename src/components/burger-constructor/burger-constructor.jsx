import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Box, CurrencyIcon, Typography, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import ElemTop from './../elem-top/elem-top';
import ElemBottom from './../elem-bottom/elem-bottom';
import ElemList from './../elem-list/elem-list';

import defaultBunGrey from './../../images/default-bun-grey.png';
import defaultIngredientGrey from './../../images/default-ingredient-grey.png';

import { NewLineKind } from 'typescript';

function BurgerConstructor(props) {
  const { ingredients: orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  const [, dropIngredientTarget] = useDrop({
    accept: ['main', 'sauce'],
    drop(itemData) {
      const removeKey = ({ __v, ...rest }) => rest;
      if (itemData) {
        const newItem = removeKey(itemData);
        console.log(' newItem: ', newItem);
        const newStuffing = [...stuffing, newItem];
        dispatch({ type: 'SET_STUFFING_INTO_ORDER', stuffing: newStuffing });
      }
    },
  });
  const [, dropBunTopTarget] = useDrop({
    accept: ['bun'],
    drop(itemData) {
      const removeKey = ({ __v, ...rest }) => rest;
      if (itemData) {
        const newBun = removeKey(itemData);
        dispatch({ type: 'SET_BUN_INTO_ORDER', bun: newBun });
      }
    },
  });
  const [, dropBunBottomTarget] = useDrop({
    accept: ['bun'],
    drop(itemData) {
      const removeKey = ({ __v, ...rest }) => rest;
      if (itemData) {
        const newBun = removeKey(itemData);
        dispatch({ type: 'SET_BUN_INTO_ORDER', bun: newBun });
      }
    },
  });

  const amountBunCheck = (arrayIngredients) => {
    if (arrayIngredients.filter((elem) => elem.type === 'bun' && elem.__v > 0).length > 1) {
      alert('Вы выбрали больше чем одну булку, выберите один вид булки');
    }

    return [...arrayIngredients.filter((elem) => elem.type === 'bun' && elem.__v > 0)][0];
  };

  const bunElement = amountBunCheck(orderIngredients);

  const ingredientsArray = [...orderIngredients.filter((elem) => elem.type !== 'bun' && elem.__v > 0)];

  useEffect(() => {
    const removeKey = ({ __v, ...rest }) => rest;
    if (bunElement) {
      const bun = removeKey(bunElement);
      dispatch({ type: 'SET_BUN_INTO_ORDER', bun: bun });
    }
    if (ingredientsArray) {
      let stuffingAcc = [];
      ingredientsArray.forEach((elem) => {
        const newElem = removeKey(elem);
        for (let j = 0; j < elem.__v; j++) {
          stuffingAcc.push(newElem);
          console.log(' stuffingAcc: ', stuffingAcc);
        }
      });
      dispatch({ type: 'SET_STUFFING_INTO_ORDER', stuffing: stuffingAcc });
    }
  }, []);

  function sumTotalBill() {
    let result = 0;
    if (stuffing.length) {
      stuffing.forEach((item) => {
        console.log('item: ', item);
        result = result + item.price;
        console.log('item.price: ', item.price);
        console.log('result: ', result);
      });
    }
    if (Object.keys(bun).length) {
      result = result + bun.price * 2;
      console.log('bun: ', bun);
    }
    console.log('result: ', result);
    return result;
  }

  const amountTotalBill = sumTotalBill() || 0;

  return (
    <div className={`mt-25 ${styles.constructorArea}`}>
      <div ref={dropBunTopTarget}>
        {Object.keys(bun).length === 0 ? (
          <ElemTop name={'Перенесите вашу булку сюда'} price={0} image={defaultBunGrey} />
        ) : (
          <ElemTop name={`${bun['name']} (верх)`} price={bun['price']} image={bun['image_mobile']} />
        )}
      </div>
      <div ref={dropIngredientTarget}>
        {stuffing.length === 0 ? (
          <ElemList name={'Перенесите ваш ингредиент сюда'} price={0} image={defaultIngredientGrey} className='pr-4' />
        ) : (
          <div className={styles.innerList}>
            {stuffing.map((elem, index) => {
              if (elem.type !== 'bun') {
                return <ElemList name={elem.name} price={elem.price} image={elem.image} key={index} className='pr-4' />;
              }
            })}
          </div>
        )}
      </div>
      <div ref={dropBunBottomTarget}>
        {' '}
        {Object.keys(bun).length === 0 ? (
          <ElemBottom name={'Перенесите вашу булку сюда'} price={0} image={defaultBunGrey} />
        ) : (
          <ElemBottom name={`${bun['name']} (низ)`} price={bun['price']} image={bun['image_mobile']} />
        )}
      </div>

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
