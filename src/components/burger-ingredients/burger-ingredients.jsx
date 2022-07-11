import React, { useEffect, useRef } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import IngredientsArea from './../ingredient-area/ingredient-area';
import NavIngredient from './../nav-ingredient/nav-ingredient';

// whole component
function BurgerIngredients(props) {
  const { orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const { menuIngredients, bunAmountArray, stuffingAmountArray } = useSelector((state) => state.burgerIngredients);

  const dispatch = useDispatch();
  const scrollBoxRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const scrollHandler = (e) => {
    // e.stopPropagation();

    if (scrollBoxRef.current.scrollTop <= bunRef.current.offsetTop) {
      dispatch({ type: 'NAV_ACTIVE_BUN' });
    }
    if (scrollBoxRef.current.scrollTop > bunRef.current.offsetTop && scrollBoxRef.current.scrollTop <= bunRef.current.offsetTop + sauceRef.current.offsetTop) {
      dispatch({ type: 'NAV_ACTIVE_SAUCE' });
    }
    if (scrollBoxRef.current.scrollTop > bunRef.current.offsetTop + sauceRef.current.offsetTop) {
      dispatch({ type: 'NAV_ACTIVE_MAIN' });
    }
  };

  // useEffect(() => {
  //   // Устанавливаем слушатель события при монтировании
  //   document.addEventListener('scroll', scrollHandler);

  //   // Сбрасываем слушатель события при удалении компонента из DOM
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox} ref={scrollBoxRef} onScroll={scrollHandler}>
        <IngredientsArea group='Булки' type='bun' data={menuIngredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={bunRef} />
        <IngredientsArea group='Соусы' type='sauce' data={menuIngredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={sauceRef} />
        <IngredientsArea group='Начинки' type='main' data={menuIngredients} onClickIngredientsItem={props.onClickIngredientsItem} ref={mainRef} />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  onClickIngredientsItem: PropTypes.func.isRequired,
};

export default BurgerIngredients;
