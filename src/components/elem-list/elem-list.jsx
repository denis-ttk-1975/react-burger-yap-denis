import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-list.module.css';

import { IngredientType } from '../../utils/prop-types';

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

ElemList.propTypes = IngredientType;

export default ElemList;
