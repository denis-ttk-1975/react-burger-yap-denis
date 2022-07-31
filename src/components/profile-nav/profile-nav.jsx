import React from 'react'; // импорт библиотеки

import { Typography, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-nav.module.css';

function ProfileNav() {
  return (
    <nav className={`${styles.profile_navBox}`}>
      <div className={`${styles.profile_nav_elem_wrap}`}>
        <a href='#' className={`${styles.profile_nav_elem} text text_type_main-medium`}>
          Профиль
        </a>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <a href='#' className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}>
          История заказов
        </a>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <a href='#' className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}>
          Выход
        </a>
      </div>
    </nav>
  );
}

export default ProfileNav;
