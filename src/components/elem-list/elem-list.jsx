import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-list.module.css';

import { IngredientType } from '../../utils/prop-types';

function ElemList(props) {
  const dispatch = useDispatch();
  const { ingredients: orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  return (
    <div className={styles.elemList}>
      <div className='pr-2'>
        <DragIcon type='primary' />
      </div>
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
        handleClose={() => {
          dispatch({
            type: 'SET_STUFFING_INTO_ORDER',
            stuffing: stuffing.filter((elem) => elem.uuid !== props.uuid),
          });
        }}
      />
    </div>
  );
}

ElemList.propTypes = IngredientType;

export default ElemList;
