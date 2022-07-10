import React, { useContext, useEffect, useRef } from 'react'; // импорт библиотеки
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
  const dispatch = useDispatch();
  const scrollBoxRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  // const { ingredients } = useContext(BurgerIngredientsContext);

  const scrollHandler = (e) => {
    // e.stopPropagation();
    console.log('bunRef', bunRef.current.offsetTop);
    console.log('sauceRef', sauceRef.current.offsetTop);
    console.log('mainRef', mainRef.current.offsetTop);
    console.log('scrollBoxRef', scrollBoxRef.current.offsetTop);
    console.log('scrollBoxRef', scrollBoxRef.current.scrollTop);

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
    <div onScroll={scrollHandler} className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox} ref={scrollBoxRef}>
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
