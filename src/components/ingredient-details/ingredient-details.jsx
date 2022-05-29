import React from 'react'; // react-lib import

import PropTypes from 'prop-types'; //prop-types-lib import

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-details.module.css';

function IngredientDetails(props) {
  return (
    <div className={styles.mainModal}>
      <div className={styles.imageWrap}>
        <img src={props.dataModal.image_large} alt={props.dataModal.name} />
      </div>
      <p className={`text text_type_main-medium ${styles.ingredientName}`}>{props.dataModal.name}</p>
      <div className={styles.paramArea}>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{props.dataModal.calories}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{props.dataModal.proteins}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{props.dataModal.fat}</p>
        </div>
        <div className={styles.paramItem}>
          <p className={`${styles.paramName} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={`${styles.paramData} text text_type_digits-default text_color_inactive`}>{props.dataModal.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
