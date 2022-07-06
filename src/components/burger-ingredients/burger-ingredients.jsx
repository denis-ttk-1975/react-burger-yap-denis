import React, { useContext } from 'react'; // импорт библиотеки

import { BurgerIngredientsContext } from './../../context/BurgerContext';

import PropTypes from 'prop-types';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import IngredientsArea from './../ingredient-area/ingredient-area';
import NavIngredient from './../nav-ingredient/nav-ingredient';

// whole component
function BurgerIngredients(props) {
  const { ingredients, setIngredients } = useContext(BurgerIngredientsContext);
  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox}>
        <IngredientsArea group='Булки' type='bun' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Соусы' type='sauce' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Начинки' type='main' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} />
      </div>
    </div>
  );
}

export default BurgerIngredients;
