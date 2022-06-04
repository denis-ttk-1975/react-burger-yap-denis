import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-area.module.css';
import IngredientsItem from '../ingredient-item/ingredient-item';

// area for group of ingredients - bun, sauce, main
function IngredientsArea(props) {
  return (
    <div className='mb-10'>
      <h3 id={props.type} className='mb-6 text text_type_main-medium'>
        {props.group}
      </h3>
      <div className={styles.ingredientsGrid}>
        {props.data.map((elem) => {
          if (elem.type === props.type) {
            return <IngredientsItem data={elem} key={elem._id} onClickIngredientsItem={props.onClickIngredientsItem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

IngredientsArea.propTypes = {
  data: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsArea;
