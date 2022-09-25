import React from 'react'; // импорт библиотеки

import styles from './preloader.module.css';

import preloader from './../../images/preloader/150x150.svg';

function Preloader() {
  return (
    <div className={`${styles.preloader}`}>
      <img src={preloader} alt={'loading...'}></img>
    </div>
  );
}

export default Preloader;
