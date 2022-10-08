import React from 'react'; // импорт библиотеки

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-bottom.module.css';

type TElementTopBottomProps = {
  name: string;
  price: number;
  image: string;
};

function ElemBottom(props: TElementTopBottomProps) {
  return (
    <div className={styles.elemBottom}>
      <ConstructorElement type='bottom' isLocked={true} text={props.name} price={props.price} thumbnail={props.image} />
    </div>
  );
}

export default ElemBottom;
