import React, { FunctionComponent, ReactNode } from 'react'; // импорт библиотеки
import { useSelector } from './../../services/store';

import styles from './ingredient-area.module.css';
import IngredientsItem from '../ingredient-item/ingredient-item';

import { TIngredientElement } from './../../services/types/types';

type TIngredientAreaProps = {
  children?: HTMLDivElement;
  group: string;
  type: string;
  data: TIngredientElement[];
  onClickIngredientsItem: (data: TIngredientElement) => void;
};
type Ref = HTMLDivElement;

// area for group of ingredients - bun, sauce, main
const IngredientsArea = React.forwardRef<Ref, TIngredientAreaProps>((props, ref) => {
  const { bun, stuffing } = useSelector((state: { burgerConstructor: { bun: TIngredientElement; stuffing: TIngredientElement[] } }) => state.burgerConstructor);

  function countIngredients() {
    const acc: {
      [name: string]: number;
    } = {};
    if (bun) acc[bun._id] = 1;
    if (stuffing) {
      stuffing.forEach((elem) => {
        if (!acc[elem._id]) acc[elem._id] = 0;
        acc[elem._id]++;
      });
    }
    return acc;
  }

  const ingredientsAmountData = countIngredients();

  return (
    <div ref={ref} className='mb-10'>
      <h3 id={props.type} className='mb-6 text text_type_main-medium'>
        {props.group}
      </h3>
      <div className={styles.ingredientsGrid}>
        {props.data.map((elem: TIngredientElement) => {
          if (elem.type === props.type) {
            return <IngredientsItem amount={ingredientsAmountData[elem._id]} data={elem} key={elem._id} onClickIngredientsItem={props.onClickIngredientsItem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
});

export default IngredientsArea;
