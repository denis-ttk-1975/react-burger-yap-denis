import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, CurrencyIcon, Typography, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

const data1 = {
  _id: '60666c42cc7b410027a1a9b1',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0,
};

function NavIngredient() {
  const [current, setCurrent] = React.useState('one');
  return (
    <div style={{ display: 'flex' }}>
      <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value='sauces' active={current === 'buns'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value='fillings' active={current === 'buns'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

function IngredientsItem(props) {
  return (
    <div className={styles.ingredientsCard}>
      <img src={props.data.image} alt={props.data.name} />
      <div className={styles.priceLabel}>
        <p className=''>{props.data.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className=''>{props.data.name}</p>
    </div>
  );
}

function IngredientsArea(props) {
  return (
    <div className=''>
      <h3 className='text text_type_main-medium'>{props.group}</h3>
      <div className={styles.ingredientsGrid}>
        <IngredientsItem data={data1} />
      </div>
    </div>
  );
}

function BurgerIngredients() {
  return (
    <div className={styles.ingredientArea}>
      <h2 className='text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <IngredientsArea group='Булки' />
    </div>
  );
}

export default BurgerIngredients;
