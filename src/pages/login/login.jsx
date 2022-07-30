import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './login.module.css';

function Login() {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <div className={`${styles.loginBox}`}>
      <p className={`${styles.login_title} text text_type_main-medium`}>Вход</p>
      <form className={`${styles.login_form}`}>
        <Input
          className={`${styles.login_input}`}
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}
          name={'Email'}
          error={false}
          ref={inputEmailRef}
          errorText={'Ошибка'}
          size={undefined}
        />
        <PasswordInput
          className={`${styles.login_input}`}
          type={'text'}
          placeholder={'Пароль'}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'Password'}
          error={false}
          ref={inputPasswordRef}
          errorText={'Ошибка'}
          //size={'default'}
        />
        <Button type='primary' size='medium'>
          Войти
        </Button>
      </form>
      <p className={`${styles.login_footer} text text_type_main-default`}>
        Вы — новый пользователь?{' '}
        <a className={`${styles.login_link}`} href='#'>
          Зарегистрироваться
        </a>
      </p>
      <p className={`${styles.login_footer} text text_type_main-default`}>
        Забыли пароль?{' '}
        <a className={`${styles.login_link}`} href='#'>
          Восстановить пароль
        </a>
      </p>
    </div>
  );
}

export default Login;
