import React from 'react'; // импорт библиотеки
import { useDispatch } from './../../services/store';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

import styles from './profile-nav.module.css';

import { logoutUser } from '../../services/actions/logout';
import { getCookie } from '../../utils/getCookie';

function ProfileNav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch('/profile/orders');

  const descriptionText = match ? 'В этом разделе вы можете просмотреть свою историю заказов' : 'В этом разделе вы можете изменить свои персональные данные';

  return (
    <nav className={`${styles.profile_navBox}`}>
      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink to={{ pathname: `/profile` }} exact className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`} activeClassName={`${styles.profile_nav_elem_active} `}>
          Профиль
        </NavLink>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink
          to={{ pathname: `/profile/orders` }}
          exact
          activeClassName={`${styles.profile_nav_elem_active} `}
          className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}
        >
          История заказов
        </NavLink>
      </div>

      <div className={`${styles.profile_nav_elem_wrap}`}>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            const refreshToken = getCookie('refreshToken');
            if (refreshToken) {
              dispatch(logoutUser(refreshToken));
            } else {
              console.log('Refresh Token absent. You will be redirected to root page');
            }

            history.push({ pathname: '/' });
          }}
          to={{ pathname: `/` }}
          exact
          className={`${styles.profile_nav_elem} text text_type_main-medium text_color_inactive`}
          activeClassName={`${styles.profile_nav_elem_active} `}
        >
          Выход
        </NavLink>
      </div>
      <p className={`${styles.profile_nav_description} text text_type_main-default text_color_inactive`}>{descriptionText}</p>
    </nav>
  );
}

export default ProfileNav;
