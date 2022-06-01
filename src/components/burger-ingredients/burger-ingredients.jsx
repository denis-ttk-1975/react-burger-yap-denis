import React from 'react'; // импорт библиотеки

import PropTypes from 'prop-types';

import { Box, CurrencyIcon, Typography, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

// navigation menu in header of ingredients area

function NavIngredient() {
  const [current, setCurrent] = React.useState('bun');

  const onTabClick = (par) => {
    console.log(par);
    setCurrent(par);
    const element = document.getElementById(par);
    if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navIngredient} mb-10`}>
      <a href='#bun' className={styles.navIngredientItem}>
        <Tab value='bun' active={current === 'bun'} onClick={onTabClick}>
          Булки
        </Tab>
      </a>
      <a href='#sauce' className={styles.navIngredientItem}>
        <Tab value='sauce' active={current === 'sauce'} onClick={onTabClick}>
          Соусы
        </Tab>
      </a>
      <a href='#main' className={styles.navIngredientItem}>
        <Tab value='main' active={current === 'main'} onClick={onTabClick}>
          Начинки
        </Tab>
      </a>
    </nav>
  );
}

// card for ingredient item
function IngredientsItem(props) {
  return (
    <div className={styles.ingredientsCard} onClick={() => props.onClickIngredientsItem(props.data)}>
      {props.data.__v ? <Counter count={props.data.__v} size='default' className={styles.counter} /> : null}
      <img src={props.data.image} alt={props.data.name} className='mb-2' />
      <div className={`mb-2 ${styles.priceLabel}`}>
        <p className='text text_type_digits-default'>{props.data.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={styles.ingredientName}>{props.data.name}</p>
    </div>
  );
}

// area for group of igredients - bun, sauce, main
function IngredientsArea(props) {
  return (
    <div className='mb-10'>
      <h3 id={props.type} className='mb-6 text text_type_main-medium'>
        {props.group}
      </h3>
      <div className={styles.ingredientsGrid}>
        {props.data.map((elem) => {
          if (elem.type === props.type) {
            return <IngredientsItem data={elem} key={elem._id} onClickIngredientsItem={props.onClickIngredientsItem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

// whole component
function BurgerIngredients(props) {
  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox}>
        <IngredientsArea group='Булки' type='bun' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Соусы' type='sauce' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
        <IngredientsArea group='Начинки' type='main' data={props.data} onClickIngredientsItem={props.onClickIngredientsItem} />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

IngredientsArea.propTypes = {
  data: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

IngredientsItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BurgerIngredients;
