import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-area.module.css';
import IngredientsItem from '../ingredient-item/ingredient-item';

// area for group of ingredients - bun, sauce, main
const IngredientsArea = React.forwardRef((props, ref) => {
  const { orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  function countIngredients() {
    const acc = {};
    if (bun) acc[bun._id] = 1;
    if (stuffing) {
      stuffing.forEach((elem) => {
        if (!acc[elem._id]) acc[elem._id] = 0;
        acc[elem._id]++;
      });
    }
    return acc;
  }

  const ingredientsAmountData = countIngredients();

  return (
    <div ref={ref} className='mb-10'>
      <h3 id={props.type} className='mb-6 text text_type_main-medium'>
        {props.group}
      </h3>
      <div className={styles.ingredientsGrid}>
        {props.data.map((elem) => {
          if (elem.type === props.type) {
            return <IngredientsItem amount={ingredientsAmountData[elem._id]} data={elem} key={elem._id} onClickIngredientsItem={props.onClickIngredientsItem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
});

IngredientsArea.propTypes = {
  data: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsArea;
