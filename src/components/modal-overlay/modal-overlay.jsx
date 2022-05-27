import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Box, Icons, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal-overlay.module.css';

const ModalOverlay = ({ onClick }) => {
  // пропс onClick - это колбэк для клика по подложке, который закрывает модальное окно

  return <div className={styles.overlay} onClick={onClick} />;
};
export default ModalOverlay;
