import React, { useState } from 'react'; // импорт библиотеки

import { Box, Typography, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './nav-ingredient.module.css';

// navigation menu in header of ingredients area

function NavIngredient() {
  const [current, setCurrent] = useState('bun');

  const onTabClick = (par) => {
    console.log(par);
    setCurrent(par);
    const element = document.getElementById(par);

    if (element) {
      console.log('element: ', element);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navIngredient} mb-10`}>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='bun' active={current === 'bun'} onClick={onTabClick}>
          Булки
        </Tab>
      </a>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='sauce' active={current === 'sauce'} onClick={onTabClick}>
          Соусы
        </Tab>
      </a>
      <a href='#' className={styles.navIngredientItem} onClick={(e) => e.preventDefault()}>
        <Tab value='main' active={current === 'main'} onClick={onTabClick}>
          Начинки
        </Tab>
      </a>
    </nav>
  );
}

export default NavIngredient;
