import React, { useEffect, ReactNode } from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

type TModalProps = {
  children: ReactNode;
  closeAllModals: () => void;
};

// Находим DOM-элемент для отрисовки в нем модальных окон
const modalsContainer = document.querySelector('#modals') as HTMLElement;

const Modal = ({ closeAllModals, children }: TModalProps) => {
  // handling for Esc pressing

  const handleEscKeydown = (e: KeyboardEvent) => {
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

export default Modal;
