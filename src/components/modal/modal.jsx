import React, { useEffect } from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './../modal-overlay/modal-overlay';

import { Box, CloseIcon, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

// Находим DOM-элемент для отрисовки в нем модальных окон
const modalsContainer = document.querySelector('#modals');

const Modal = ({ title, closeAllModals, children }) => {
  // handling for Esc pressing

  const handleEscKeydown = (e) => {
    e.key === 'Escape' && closeAllModals();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.wrapModal}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className='text text_type_main-large'>{title}</h3>
          <button className={styles.closeModalButton} onClick={closeAllModals}>
            <CloseIcon type='primary' />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={closeAllModals} />
    </div>,
    modalsContainer
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  closeAllModals: PropTypes.func.isRequired,
};

export default Modal;
