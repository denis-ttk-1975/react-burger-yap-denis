import React from 'react'; // импорт библиотеки
import { useDrag } from 'react-dnd';

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-item.module.css';

// card for ingredient item
function IngredientsItem(props) {
  const [, dragRef] = useDrag(() => ({
    type: props.data.type,
    item: props.data,
  }));

  return (
    <div className={styles.ingredientsCard} onClick={() => props.onClickIngredientsItem(props.data)} ref={dragRef}>
      {props.data.__v ? <Counter count={props.data.__v} size='default' className={styles.counter} /> : null}
      <img src={props.data.image} alt={props.data.name} className='mb-2' />
      <div className={`mb-2 ${styles.priceLabel}`}>
        <p className='text text_type_digits-default'>{props.data.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={styles.ingredientName}>{props.data.name}</p>
    </div>
  );
}

IngredientsItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngredientsItem;
