import React, { useEffect } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from './../../services/actions/patch-user-info';
import { requestForUserInfo } from './../../services/actions/get-user-info';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Input, EmailInput, PasswordInput, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile-data.module.css';

function ProfileData() {
  const dispatch = useDispatch();

  // dispatch(requestForUserInfo());

  useEffect(() => {
    dispatch(requestForUserInfo());
  }, [dispatch]);

  const [valueName, setValueName] = React.useState(localStorage.getItem('user_name'));
  const [valueEmail, setValueEmail] = React.useState(localStorage.getItem('user_email'));
  const [valuePassword, setValuePassword] = React.useState('');
  const [activateButtons, setActivateButtons] = React.useState(false);
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <form
      className={`${styles.profile_data_form}`}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateUserInfo(valueName, valueEmail, valuePassword));
      }}
    >
      <div className={'input_wrapper'}>
        <Input
          className={`${styles.profile_data_input}`}
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => {
            setValueName(e.target.value);
            setActivateButtons(true);
          }}
          value={valueName}
          name={'name'}
          error={false}
          ref={inputNameRef}
          errorText={'Ошибка'}
          icon={'EditIcon'}
        />
      </div>
      <div className={'input_wrapper'}>
        <EmailInput
          className={`${styles.profile_data_input}`}
          onChange={(e) => {
            setValueEmail(e.target.value);
            setActivateButtons(true);
          }}
          value={valueEmail}
          name={'email'}
        />
      </div>
      <div className={'input_wrapper'}>
        <PasswordInput
          className={`${styles.profile_data_input}`}
          onChange={(e) => {
            setValuePassword(e.target.value);
            setActivateButtons(true);
          }}
          value={valuePassword}
          name={'password'}
        />
      </div>
      {activateButtons && (
        <div className={`${styles.profile_data_buttons_area}`}>
          <Button
            type='secondary'
            size='medium'
            onClick={(e) => {
              e.preventDefault();
              setValueName(localStorage.getItem('user_name'));
              setValueEmail(localStorage.getItem('user_email'));
              setValuePassword('');
            }}
          >
            Отмена
          </Button>
          <Button
            type='primary'
            size='medium'
            // onClick={(e) => {
            //   e.preventDefault();
            //   dispatch(updateUserInfo(valueName, valueEmail, valuePassword));
            // }}
          >
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export default ProfileData;
