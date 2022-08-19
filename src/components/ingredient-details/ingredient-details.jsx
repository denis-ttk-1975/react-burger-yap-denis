import React from 'react'; // react-lib import
import { BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types'; //prop-types-lib import

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-details.module.css';

function IngredientDetails() {
  const { id } = useParams();
  console.log('id: ', id);
  const { menuIngredients } = useSelector((state) => state.burgerIngredients);

  const dataModal = menuIngredients.find((item) => item._id === id);
  console.log('dataModal: ', dataModal);

  return (
    <div className={styles.mainModal}>
      <div className={styles.imageWrap}>
        <img src={dataModal.image_large} alt={dataModal.name} />
      </div>
      <p className={`text text_type_main-medium ${styles.ingredientName}`}>{dataModal.name}</p>
      <div className={styles.paramArea}>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{dataModal.calories}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{dataModal.proteins}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{dataModal.fat}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{dataModal.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
