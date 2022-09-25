import React from 'react'; // импорт библиотеки
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-item.module.css';

type TIngredientElement = { image_mobile: string; type: string; __v: number; uuid: string; price: number; name: string; image: string; _id: string };

type Props = {
  amount: number;
  data: TIngredientElement;
  onClickIngredientsItem: (arg: TIngredientElement) => void;
};

// card for ingredient item
function IngredientsItem(props: Props) {
  const [, dragRef] = useDrag(() => ({
    type: props.data.type,
    item: props.data,
  }));
  const location = useLocation();
  const id = props.data._id;
  return (
    <Link to={{ pathname: `/ingredients/${id}`, state: { background: location } }}>
      <div className={styles.ingredientsCard} onClick={() => props.onClickIngredientsItem(props.data)} ref={dragRef}>
        {props.amount ? <Counter count={props.amount} size='default' className={styles.counter} /> : null}
        <img src={props.data.image} alt={props.data.name} className='mb-2' />
        <div className={`mb-2 ${styles.priceLabel}`}>
          <p className='text text_type_digits-default'>{props.data.price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className={styles.ingredientName}>{props.data.name}</p>
      </div>
    </Link>
  );
}

export default IngredientsItem;
