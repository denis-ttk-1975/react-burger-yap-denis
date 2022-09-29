import React from 'react'; // импорт библиотеки
import { useSelector } from 'react-redux';
import { useDispatch } from './../../services/store';

import { setBunActiveForMenu, setSauceActiveForMenu, setMainActiveForMenu } from '../../services/actions/burger-ingredients';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './nav-ingredient.module.css';

// navigation menu in header of ingredients area

function NavIngredient() {
  const dispatch = useDispatch();

  const { activeNavElement } = useSelector((state: { burgerIngredients: { activeNavElement: string } }) => state.burgerIngredients);

  const onTabClick = (par: string) => {
    switch (par) {
      case 'bun': {
        dispatch(setBunActiveForMenu());
        break;
      }
      case 'sauce': {
        dispatch(setSauceActiveForMenu());
        break;
      }
      case 'main': {
        dispatch(setMainActiveForMenu());
        break;
      }
      default: {
        dispatch(setBunActiveForMenu());
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
