import React from 'react'; // импорт библиотеки

import { Typography, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './login.module.css';
import './../pages.css';
// import './index.css';
// import './login.css';

function Login() {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <div className={`${styles.loginBox}`}>
      <p className={`${styles.login_title} text text_type_main-medium`}>Вход</p>
      <form className={`${styles.login_form}`} style={{ width: 480 }}>
        <div className={'input_wrapper'}>
          <Input
            className={`${styles.login_input}`}
            type={'text'}
            placeholder={'E-mail'}
            onChange={(e) => setValueEmail(e.target.value)}
            value={valueEmail}
            name={'email'}
            error={false}
            ref={inputEmailRef}
            errorText={'Ошибка'}
          />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput
            className={`${styles.login_input}`}
            type={'text'}
            placeholder={'Пароль'}
            onChange={(e) => setValuePassword(e.target.value)}
            value={valuePassword}
            name={'password'}
            error={false}
            ref={inputPasswordRef}
            errorText={'Ошибка'}
          />
        </div>

        <Button type='primary' size='medium'>
          Войти
        </Button>
      </form>
      <p className={`${styles.login_footer} text text_type_main-default text_color_inactive`}>
        Вы — новый пользователь?{' '}
        <a className={`${styles.login_link}`} href='#'>
          Зарегистрироваться
        </a>
      </p>
      <p className={`${styles.login_footer} text text_type_main-default text_color_inactive`}>
        Забыли пароль?{' '}
        <a className={`${styles.login_link}`} href='#'>
          Восстановить пароль
        </a>
      </p>
    </div>
  );
}

export default Login;
