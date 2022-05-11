import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerBox}`}>
        <div className={styles.leftIconBox}>
          <div className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItemActive}`}>
            <BurgerIcon type='primary' />
            <p className='ml-2 text text_type_main-default'>Конструктор</p>
          </div>

          <div className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItem}`}>
            <ListIcon type='secondary' />
            <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
          </div>
        </div>
        <div className={styles.headerLogo}>
          <Logo />
        </div>

        <div className={`pt-4 pb-4 pl-5 pr-5 ${styles.rightIconBox}`}>
          <div className={styles.navItem}>
            <ProfileIcon type='secondary' />
            <p className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
