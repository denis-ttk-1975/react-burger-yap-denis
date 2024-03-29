import React, { FC } from 'react'; // импорт библиотеки
import { useLocation, Link } from 'react-router-dom'; // импорт библиотеки

import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  const location: { pathname: string } = useLocation();
  const typePrimary: 'secondary' | 'primary' | 'error' | 'success' = 'primary';
  const typeSecondary: 'secondary' | 'primary' | 'error' | 'success' = 'secondary';

  const classNameActive: string = 'ml-2 text text_type_main-default ';
  const classNameInactive: string = 'ml-2 text text_type_main-default text_color_inactive';
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerBox}`}>
        <div className={styles.leftIconBox}>
          <Link to={{ pathname: `/` }} className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItem}`}>
            <BurgerIcon type={location.pathname === '/' ? typePrimary : typeSecondary} />
            <p className={location.pathname === '/' ? classNameActive : classNameInactive}>Конструктор</p>
          </Link>

          <Link to={{ pathname: `/feed` }} className={`pt-4 pb-4 pl-5 pr-5 ${styles.navItem}`}>
            <ListIcon type={location.pathname === '/feed' ? typePrimary : typeSecondary} />
            <p className={location.pathname === '/feed' ? classNameActive : classNameInactive}>Лента заказов</p>
          </Link>
        </div>
        <div className={styles.headerLogo}>
          <Link to={{ pathname: `/` }}>
            <Logo />
          </Link>
        </div>

        <div className={`pt-4 pb-4 pl-5 pr-5 ${styles.rightIconBox}`}>
          <Link to={{ pathname: `/profile` }} className={styles.navItem}>
            <ProfileIcon type={location.pathname.substr(0, 8) === '/profile' ? typePrimary : typeSecondary} />
            <p className={location.pathname.substr(0, 8) === '/profile' ? classNameActive : classNameInactive}>Личный кабинет</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
