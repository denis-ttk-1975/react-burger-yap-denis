import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, Icons, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  return (
    <div className={styles.constructorArea}>
      <p className='text text_type_main-large'>Burger Конструктор</p>
    </div>
  );
}

export default BurgerConstructor;
