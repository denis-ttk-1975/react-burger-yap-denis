import React, { useContext, useRef } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { BurgerIngredientsContext } from './../../context/BurgerContext';

import PropTypes from 'prop-types';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import IngredientsArea from './../ingredient-area/ingredient-area';
import NavIngredient from './../nav-ingredient/nav-ingredient';

// whole component
function BurgerIngredients(props) {
  const { ingredients } = useSelector((state) => state.burgerIngredients);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  // const { ingredients } = useContext(BurgerIngredientsContext);
  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox}>
        <IngredientsArea group='Булки' type='bun' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={bunRef} />
        <IngredientsArea group='Соусы' type='sauce' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={sauceRef} />
        <IngredientsArea group='Начинки' type='main' data={ingredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={mainRef} />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  onClickIngredientsItem: PropTypes.func.isRequired,
};

export default BurgerIngredients;
