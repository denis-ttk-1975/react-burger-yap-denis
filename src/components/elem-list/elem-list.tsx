import React, { useRef, ReactNode } from 'react'; // импорт библиотеки
import { useSelector } from './../../services/store';
import { useDispatch } from './../../services/store';

import { useDrag, useDrop } from 'react-dnd';

import { setStuffingIntoOrder } from '../../services/actions/burger-constructor';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-list.module.css';

import { TIngredientElement } from './../../services/types/types';

type TElementListProps = {
  index: number;
  uuid: string;
  name: string;
  price: number;
  image: string;
};

function ElemList({ index, uuid, name, price, image }: TElementListProps) {
  const dispatch = useDispatch();
  const { stuffing } = useSelector(
    (state: {
      burgerConstructor: {
        stuffing: TIngredientElement[];
      };
    }) => state.burgerConstructor
  );

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'sorting',

    hover(item: TElementListProps, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;

      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // conditional term for TypeScript
      if (!hoverBoundingRect) return;
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // conditional term for TypeScript
      if (!clientOffset) return;
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action

      const stuffingAcc = [...stuffing];
      stuffingAcc.splice(hoverIndex, 0, stuffingAcc.splice(dragIndex, 1)[0]);

      dispatch(setStuffingIntoOrder(stuffingAcc));
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    type: 'sorting',
    item: () => {
      return { uuid, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={styles.elemList}>
      <div className='pr-2'>
        <DragIcon type='primary' />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => {
          dispatch(setStuffingIntoOrder(stuffing.filter((elem: TIngredientElement) => elem.uuid !== uuid)));
        }}
      />
    </div>
  );
}

export default ElemList;
