import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './../modal-overlay/modal-overlay';

import { Box, CloseIcon, Typography, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

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
        <div className={styles.modalHeader}>
          <h3 className='text text_type_main-large'>{title}</h3>
          <button className={styles.closeModalButton} onClick={onOverlayClick}>
            <CloseIcon type='primary' />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onOverlayClick} />
    </div>,
    modalsContainer
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
  onEscKeydown: PropTypes.func.isRequired,
};

export default Modal;
