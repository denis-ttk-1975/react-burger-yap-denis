import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './../modal-overlay/modal-overlay';

import { Box, Icons, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

// Находим DOM-элемент для отрисовки в нем модальных окон
const modalsContainer = document.querySelector('#modals');

const Modal = ({ title, onOverlayClick, onEscKeydown, children }) => {
  React.useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.wrapModal}>
      <div className={styles.modal}>
        <h3>{title}</h3>
        {children}
      </div>
      <ModalOverlay onClick={onOverlayClick} />
    </div>,
    modalsContainer
  );
};

export default Modal;
