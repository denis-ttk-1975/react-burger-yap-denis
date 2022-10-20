import React from 'react'; // импорт библиотеки

import styles from './modal-overlay.module.css';

const ModalOverlay = ({ onClick }: { onClick: () => void }) => {
  // пропс onClick - это колбэк для клика по подложке, который закрывает модальное окно

  return <div className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
