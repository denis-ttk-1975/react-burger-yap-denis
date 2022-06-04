import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-bottom.module.css';

import { IngredientType } from '../../utils/prop-types';

function ElemBottom(props) {
  return (
    <div className={styles.elemBottom}>
      <ConstructorElement type='bottom' isLocked={true} text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

ElemBottom.propTypes = IngredientType;

export default ElemBottom;
