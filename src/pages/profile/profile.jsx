import React from 'react'; // импорт библиотеки
import { Route, Switch } from 'react-router-dom';

import { Box, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import ProfileNav from '../../components/profile-nav/profile-nav';
import ProfileData from '../../components/profile-data/profile-data';
import OrderHistoryData from '../../components/order-history-data/order-history-data';

import styles from './profile.module.css';

function Profile() {
  return (
    <div className={`${styles.profileBox}`}>
      <ProfileNav />
      <Switch>
        <Route path='/profile' exact={true}>
          <ProfileData />
        </Route>
        <Route path='/profile/orders' exact={true}>
          <OrderHistoryData />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
