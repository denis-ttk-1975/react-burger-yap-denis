import React from 'react'; // импорт библиотеки
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import { Typography, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-nav.module.css';

function ProfileNav() {
  return (
    <nav className={`${styles.profile_navBox}`}>
      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink
          to={{ pathname: `/profile` }}
          activeClassName={`${styles.profile_nav_elem} text text_type_main-medium`}
          className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}
        >
          Профиль
        </NavLink>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink
          to={{ pathname: `/profile/orders` }}
          activeClassName={`${styles.profile_nav_elem} text text_type_main-medium`}
          className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}
        >
          История заказов
        </NavLink>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink
          to={{ pathname: `/` }}
          activeClassName={`${styles.profile_nav_elem} text text_type_main-medium`}
          className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}
        >
          Выход
        </NavLink>
      </div>
    </nav>
  );
}

export default ProfileNav;
