import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, PasswordInput, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-data.module.css';

function ProfileData() {
  const [valueName, setValueName] = React.useState('Denis');
  const [valueEmail, setValueEmail] = React.useState('MyE-Mail');
  const [valuePassword, setValuePassword] = React.useState('MyPass');
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <form className={`${styles.profile_data_form}`}>
      <Input
        className={`${styles.profile_data_input}`}
        type={'text'}
        placeholder={'Имя'}
        onChange={(e) => setValueName(e.target.value)}
        value={valueName}
        name={'name'}
        error={false}
        ref={inputNameRef}
        errorText={'Ошибка'}
        size={undefined}
        icon={'EditIcon'}
      />
      <Input
        className={`${styles.profile_data_input}`}
        type={'text'}
        placeholder={'E-mail'}
        onChange={(e) => setValueEmail(e.target.value)}
        value={valueEmail}
        name={'email'}
        error={false}
        ref={inputEmailRef}
        errorText={'Ошибка'}
        size={undefined}
        icon={'EditIcon'}
      />
      <Input
        className={`${styles.profile_data_input}`}
        type={'password'}
        placeholder={'Пароль'}
        onChange={(e) => setValuePassword(e.target.value)}
        value={valuePassword}
        name={'password'}
        error={false}
        ref={inputPasswordRef}
        errorText={'Ошибка'}
        icon={'EditIcon'}
        //size={'default'}
      />
    </form>
  );
}

export default ProfileData;
