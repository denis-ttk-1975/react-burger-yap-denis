import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';

import { NAV_ACTIVE_BUN, NAV_ACTIVE_SAUCE, NAV_ACTIVE_MAIN } from './../../services/actions/burger-ingredients';

import { Box, Typography, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './nav-ingredient.module.css';

// navigation menu in header of ingredients area

function NavIngredient() {
  const dispatch = useDispatch();

  const { activeNavElement } = useSelector((state) => state.burgerIngredients);

  const onTabClick = (par) => {
    switch (par) {
      case 'bun': {
        dispatch({ type: NAV_ACTIVE_BUN });
        break;
      }
      case 'sauce': {
        dispatch({ type: NAV_ACTIVE_SAUCE });
        break;
      }
      case 'main': {
        dispatch({ type: NAV_ACTIVE_MAIN });
        break;
      }
      default: {
        dispatch({ type: NAV_ACTIVE_BUN });
      }
    }
    const element = document.getElementById(par);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navIngredient} mb-10`}>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='bun' active={activeNavElement === 'bun'} onClick={onTabClick}>
          Булки
        </Tab>
      </a>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='sauce' active={activeNavElement === 'sauce'} onClick={onTabClick}>
          Соусы
        </Tab>
      </a>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='main' active={activeNavElement === 'main'} onClick={onTabClick}>
          Начинки
        </Tab>
      </a>
    </nav>
  );
}

export default NavIngredient;
