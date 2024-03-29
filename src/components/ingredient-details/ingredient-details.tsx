import React from 'react'; // react-lib import
import { useParams } from 'react-router-dom';
import { useSelector } from './../../services/store';

import styles from './ingredient-details.module.css';

import { TIngredientElement } from './../../services/types/types';

type TIngredientDetailsProps = { center?: boolean };

function IngredientDetails(props: TIngredientDetailsProps) {
  const params = useParams() as { id: string };
  const { menuIngredients } = useSelector((state) => state.burgerIngredients);

  const dataModal = menuIngredients.find((item) => item._id === params.id);

  if (!dataModal) return null;

  const styleHeader = props.center ? `${styles.modalHeader} text text_type_main-large ${styles.center}` : `${styles.modalHeader} text text_type_main-large`;

  return (
    <div className={styles.mainModal}>
      <h3 className={styleHeader}>Детали ингредиента</h3>

      <div className={styles.imageWrap}>
        <img className={styles.image} src={dataModal.image_large} alt={dataModal.name} />
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
