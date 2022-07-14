import React, { useEffect, useRef } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { SET_BURGER_INGREDIENTS, SET_BUN_INTO_ORDER, SET_STUFFING_INTO_ORDER, DELETE_STUFFING_FROM_ORDER } from './../../services/actions/burger-constructor';

import PropTypes from 'prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './elem-list.module.css';

import { IngredientType } from '../../utils/prop-types';

function ElemList({ index, uuid, name, price, image }) {
  const dispatch = useDispatch();
  const { ingredients: orderIngredients, bun, stuffing } = useSelector((state) => state.burgerConstructor);

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'sorting',

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      console.log('dragIndex: ', dragIndex);
      const hoverIndex = index;
      console.log('hoverIndex: ', hoverIndex);
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
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

      // console.log(dragIndex, hoverIndex);
      const stuffingAcc = [...stuffing];
      stuffingAcc.splice(hoverIndex, 0, stuffingAcc.splice(dragIndex, 1)[0]);
      // console.log('stuffing: ', stuffing);
      // console.log('stuffingAcc: ', stuffingAcc);

      dispatch({ type: SET_STUFFING_INTO_ORDER, stuffing: stuffingAcc });
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
          dispatch({
            type: SET_STUFFING_INTO_ORDER,
            stuffing: stuffing.filter((elem) => elem.uuid !== uuid),
          });
        }}
      />
    </div>
  );
}

ElemList.propTypes = IngredientType;

export default ElemList;
