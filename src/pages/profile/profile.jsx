import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ProfileNav from '../../components/profile-nav/profile-nav';
import ProfileData from '../../components/profile-data/profile-data';

import styles from './profile.module.css';

function Profile() {
  const [valueName, setValueName] = React.useState('Denis');
  const [valueEmail, setValueEmail] = React.useState('MyE-Mail');
  const [valuePassword, setValuePassword] = React.useState('MyPass');
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <div className={`${styles.profileBox}`}>
      <ProfileNav />
      <ProfileData />
    </div>
  );
}

export default Profile;
