import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, Icons, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.leftIconBox}>
        <div className={styles.navItemActive}>
          <BurgerIcon type='primary' />
          <p className='ml-2'>Конструктор</p>
        </div>

        <div className={styles.navItem}>
          <ListIcon type='secondary' />
          <p className='ml-2'>Лента заказов</p>
        </div>
      </div>
      <div className={styles.headerLogo}>
        <Logo />
      </div>

      <div className={styles.rightIconBox}>
        <div className={styles.navItem}>
          <ProfileIcon type='secondary' />
          <p className='ml-2'>Личный кабинет</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
