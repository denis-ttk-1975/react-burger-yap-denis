import React from 'react'; // импорт библиотеки

import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import Modal from './../modal/modal';

import styles from './app.module.css';

import data from './../../utils/data';

function App() {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false); // boolean state for orderDetailsWindow

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
