import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, ShowIcon, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './login.module.css';

function Login() {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <div className={`${styles.loginBox}`}>
      <p className={`${styles.loginBox}`}>Вход</p>
      <form className={`${styles.loginBox}`}>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}
          name={'Email'}
          error={false}
          ref={inputEmailRef}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'text'}
          placeholder={'Пароль'}
          onChange={(e) => setValuePassword(e.target.value)}
          icon={'ShowIcon'}
          value={valuePassword}
          name={'Password'}
          error={false}
          ref={inputPasswordRef}
          onIconClick={alert('click')}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Button type='primary' size='medium'>
          Войти
        </Button>
      </form>
      <p>
        Вы — новый пользователь? <a href='#'>Зарегистрироваться</a>
      </p>
      <p>
        Забыли пароль? <a href='#'>Восстановить пароль</a>
      </p>
    </div>
  );
}

export default Login;
