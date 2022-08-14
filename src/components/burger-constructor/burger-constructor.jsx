import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import { setBunIntoOrder, setStuffingIntoOrder } from './../../services/actions/burger-constructor';

import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Box, CurrencyIcon, Typography, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import ElemTop from './../elem-top/elem-top';
import ElemBottom from './../elem-bottom/elem-bottom';
import ElemList from './../elem-list/elem-list';

import defaultBunGrey from './../../images/default-bun-grey.png';
import defaultIngredientGrey from './../../images/default-ingredient-grey.png';

import { NewLineKind } from 'typescript';

function BurgerConstructor(props) {
  const { orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();

  const [, dropIngredientTarget] = useDrop({
    accept: ['main', 'sauce', 'bun'],
    drop(itemData) {
      const removeKey = ({ __v, ...rest }) => rest;

      if (itemData) {
        if (itemData.type === 'bun') {
          const newBun = { ...itemData, uuid: nanoid() };
          dispatch(setBunIntoOrder(newBun));
        }
        if (itemData.type === 'main' || itemData.type === 'sauce') {
          const newItem = { ...itemData, uuid: nanoid() };
          const newStuffing = [...stuffing, newItem];
          dispatch(setStuffingIntoOrder(newStuffing));
        }

        //   ? stuffing.map((item, index, arr) => {
      }
    },
  });

  const amountBunCheck = (arrayIngredients) => {
    if (arrayIngredients.filter((elem) => elem.type === 'bun' && elem.__v > 0).length > 1) {
      alert('Вы выбрали больше чем одну булку, выберите один вид булки');
    }

    return [...arrayIngredients.filter((elem) => elem.type === 'bun')][0];
  };

  const bunElement = amountBunCheck(orderIngredients);

  const ingredientsArray = [...orderIngredients.filter((elem) => elem.type !== 'bun')];

  useEffect(() => {
    // const removeKey = ({ __v, ...rest }) => rest;
    if (bunElement) {
      const bun = { ...bunElement, uuid: nanoid() };

      dispatch(setBunIntoOrder(bun));
    }
    if (ingredientsArray) {
      let stuffingAcc = [];
      ingredientsArray.forEach((elem) => {
        const newElem = { ...elem, uuid: nanoid() };

        stuffingAcc.push(newElem);
      });
      dispatch(setStuffingIntoOrder(stuffingAcc));
    }
  }, []);

  function sumTotalBill() {
    let result = 0;
    if (stuffing.length) {
      stuffing.forEach((item) => {
        result = result + item.price;
      });
    }
    if (Object.keys(bun).length) {
      result = result + bun.price * 2;
    }

    return result;
  }

  const amountTotalBill = sumTotalBill() || 0;

  return (
    <div className={`mt-25 ${styles.constructorArea}`} ref={dropIngredientTarget}>
      <div>
        {Object.keys(bun).length === 0 ? (
          <ElemTop name={'Перенесите вашу булку сюда'} price={0} image={defaultBunGrey} />
        ) : (
          <ElemTop name={`${bun['name']} (верх)`} price={bun['price']} image={bun['image_mobile']} />
        )}
      </div>
      <div className={'constructor__stuffing'}>
        {stuffing.length === 0 ? (
          <ElemList uuid={0} name={'Перенесите ваш ингредиент сюда'} price={0} image={defaultIngredientGrey} className='pr-4' />
        ) : (
          <div className={styles.innerList}>
            {stuffing.map((elem, index) => {
              if (elem.type !== 'bun') {
                return <ElemList index={index} uuid={elem.uuid} name={elem.name} price={elem.price} image={elem.image} key={elem.uuid} className='pr-4' />;
              }
            })}
          </div>
        )}
      </div>
      <div>
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
