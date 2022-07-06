import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import IngredientsArea from './../ingredient-area/ingredient-area';
import NavIngredient from './../nav-ingredient/nav-ingredient';

// whole component
function BurgerIngredients(props) {
  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox}>
        <IngredientsArea group='Булки' type='bun' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Соусы' type='sauce' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Начинки' type='main' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
