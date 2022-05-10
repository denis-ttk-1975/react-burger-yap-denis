import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, Icons, Typography, Button, ConstructorElement, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';

import styles from './app.module.css';

import data from './../../utils/data';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
