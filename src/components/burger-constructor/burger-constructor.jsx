import React, { useContext } from 'react'; // импорт библиотеки

import BurgerIngredientsContext from './../../context/burger-ingredient-context';

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import ElemTop from './../elem-top/elem-top';
import ElemBottom from './../elem-bottom/elem-bottom';
import ElemList from './../elem-list/elem-list';

import testData from './../../utils/data';

function BurgerConstructor(props) {
  const { ingredients, setIngredients } = useContext(BurgerIngredientsContext);

  console.log(ingredients);
  console.log(props.data);

  const bunElement = ingredients.find((elem) => {
    if (elem.type === 'bun' && elem.__v === 1) {
      return true;
    }
    return false;
  });

  const ingredientsArray = ingredients.filter((elem) => elem.type !== 'bun' && elem.__v > 0);

  const sumTotalBill = (array, bunElem) => {
    let result = 0;
    if (array) {
      array.forEach((item) => {
        if (item.type !== 'bun') {
          result = result + item.__v * item.price;
        }
      });
    }

    if (bunElem) {
      result = result + bunElem.price * 2;
    }
    return result;
  };

  const amountTotalBill = sumTotalBill(ingredientsArray, bunElement);

  // console.log('bunElement: ', bunElement);
  // console.log('ingredientsArray: ', ingredientsArray);
  // console.log('amountTotalBill: ', amountTotalBill);

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
