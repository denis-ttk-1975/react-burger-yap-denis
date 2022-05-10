import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, CurrencyIcon, Typography, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

// import data from './../../utils/data';

function NavIngredient() {
  const [current, setCurrent] = React.useState('buns');
  return (
    <div style={{ display: 'flex' }} className='mb-10'>
      <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value='sauces' onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value='fillings' onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

function IngredientsItem(props) {
  return (
    <div className={styles.ingredientsCard}>
      {props.data.__v ? <Counter count={props.data.__v} size='default' className={styles.counter} /> : null}
      <img src={props.data.image} alt={props.data.name} className='mb-2' />
      <div className={`mb-2 ${styles.priceLabel}`}>
        <p className=''>{props.data.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={styles.ingredientName}>{props.data.name}</p>
    </div>
  );
}

function IngredientsArea(props) {
  return (
    <div className='mb-10'>
      <h3 className='mb-6 text text_type_main-medium'>{props.group}</h3>
      <div className={styles.ingredientsGrid}>
        {props.data.map((elem, index) => {
          if (elem.type === props.type) {
            return <IngredientsItem data={elem} key={elem._id} />;
          }
        })}
      </div>
    </div>
  );
}

function BurgerIngredients(props) {
  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox}>
        <IngredientsArea group='Булки' type='bun' data={props.data} />
        <IngredientsArea group='Соусы' type='sauce' data={props.data} />
        <IngredientsArea group='Начинки' type='main' data={props.data} />
      </div>
    </div>
  );
}

export default BurgerIngredients;
