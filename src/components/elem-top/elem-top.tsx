import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-top.module.css';

import { IngredientType } from '../../utils/prop-types';

type TElementTopBottomProps = {
  name: string;
  price: number;
  image: string;
};

function ElemTop(props: TElementTopBottomProps) {
  return (
    <div className={styles.elemTop}>
      <ConstructorElement type='top' isLocked={true} text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

ElemTop.propTypes = IngredientType;

export default ElemTop;
