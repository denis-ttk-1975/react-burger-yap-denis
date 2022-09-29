import React, { useRef } from 'react'; // импорт библиотеки
import { useSelector } from 'react-redux';
import { useDispatch } from './../../services/store';

import { setBunActiveForMenu, setSauceActiveForMenu, setMainActiveForMenu } from '../../services/actions/burger-ingredients';

import styles from './burger-ingredients.module.css';

import IngredientsArea from '../ingredient-area/ingredient-area';
import NavIngredient from '../nav-ingredient/nav-ingredient';

import { TIngredientElement } from './../../services/types/types';

// whole component
function BurgerIngredients({ onClickIngredientsItem }: { onClickIngredientsItem: () => void }) {
  const { menuIngredients } = useSelector((state: { burgerIngredients: { menuIngredients: TIngredientElement[] } }) => state.burgerIngredients);

  const dispatch = useDispatch();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollHandler: React.UIEventHandler<HTMLDivElement> = (e) => {
    if (scrollBoxRef.current && bunRef.current && sauceRef.current) {
      if (scrollBoxRef.current.scrollTop <= bunRef.current.offsetTop) {
        dispatch(setBunActiveForMenu());
      }
      if (scrollBoxRef.current.scrollTop > bunRef.current.offsetTop && scrollBoxRef.current.scrollTop <= bunRef.current.offsetTop + sauceRef.current.offsetTop) {
        dispatch(setSauceActiveForMenu());
      }
      if (scrollBoxRef.current.scrollTop > bunRef.current.offsetTop + sauceRef.current.offsetTop) {
        dispatch(setMainActiveForMenu());
      }
    }
  };

  return (
    <div className={`mt-10 ${styles.ingredientArea}`}>
      <h2 className='mb-5 text text_type_main-large'>Соберите бургер</h2>
      <NavIngredient />
      <div className={styles.scrollBox} ref={scrollBoxRef} onScroll={scrollHandler}>
        <IngredientsArea group='Булки' type='bun' data={menuIngredients} onClickIngredientsItem={onClickIngredientsItem} ref={bunRef} />
        <IngredientsArea group='Соусы' type='sauce' data={menuIngredients} onClickIngredientsItem={onClickIngredientsItem} ref={sauceRef} />
        <IngredientsArea group='Начинки' type='main' data={menuIngredients} onClickIngredientsItem={onClickIngredientsItem} ref={mainRef} />
      </div>
    </div>
  );
}

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

export default BurgerIngredients;
