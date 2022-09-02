import React, { useEffect } from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './../modal-overlay/modal-overlay';

import { Box, CloseIcon, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

// Находим DOM-элемент для отрисовки в нем модальных окон
const modalsContainer = document.querySelector('#modals');

const Modal = ({ closeAllModals, children }) => {
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
        <button className={styles.closeModalButton} onClick={closeAllModals}>
          <CloseIcon type='primary' />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={closeAllModals} />
    </div>,
    modalsContainer
  );
};

Modal.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
};

export default Modal;
