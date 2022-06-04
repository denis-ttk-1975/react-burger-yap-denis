import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerBox}`}>
        <div className={styles.leftIconBox}>
          <a href='#' className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItem}`}>
            <BurgerIcon type='primary' />
            <p className='ml-2 text text_type_main-default'>Конструктор</p>
          </a>

          <a href='#' className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItem}`}>
            <ListIcon type='secondary' />
            <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
          </a>
        </div>
        <div className={styles.headerLogo}>
          <Logo />
        </div>

        <div className={`pt-4 pb-4 pl-5 pr-5 ${styles.rightIconBox}`}>
          <a href='#' className={styles.navItem}>
            <ProfileIcon type='secondary' />
            <p className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
          </a>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
