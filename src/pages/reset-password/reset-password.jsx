import React from 'react';
import { useHistory, Link } from 'react-router-dom'; // импорт библиотеки

import { Typography, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './reset-password.module.css';

function ResetPassword() {
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueCode, setValueCode] = React.useState('');

  const inputPasswordRef = React.useRef(null);
  const inputCodeRef = React.useRef(null);

  return (
    <div className={`${styles.reset_passwordBox}`}>
      <p className={`${styles.reset_password_title} text text_type_main-medium`}>Восстановление пароля</p>
      <form className={`${styles.reset_password_form}`} style={{ width: 480 }}>
        <div className={'input_wrapper'}>
          <PasswordInput
            className={`${styles.reset_password_input}`}
            type={'text'}
            placeholder={'Введите новый пароль'}
            onChange={(e) => setValuePassword(e.target.value)}
            value={valuePassword}
            name={'password'}
            error={false}
            ref={inputPasswordRef}
            errorText={'Ошибка'}
          />
        </div>

        <div className={'input_wrapper'}>
          <Input
            className={`${styles.reset_password_input}`}
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={(e) => setValueCode(e.target.value)}
            value={valueCode}
            name={'email'}
            error={false}
            ref={inputCodeRef}
            errorText={'Ошибка'}
          />
        </div>
        <Button type='primary' size='medium'>
          Сохранить
        </Button>
      </form>
      <p className={`${styles.reset_password_footer} text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?
        <Link to={{ pathname: `/login` }} className={`${styles.reset_password_link}`}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
