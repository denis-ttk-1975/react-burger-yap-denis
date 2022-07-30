import React from 'react'; // импорт библиотеки

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './register.module.css';

function Register() {
  const [valueName, setValueName] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null);
  return (
    <div className={`${styles.registerBox}`}>
      <p className={`${styles.register_title} text text_type_main-medium`}>Регистрация</p>
      <form className={`${styles.register_form}`}>
        <Input
          className={`${styles.register_input}`}
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setValueName(e.target.value)}
          value={valueName}
          name={'name'}
          error={false}
          ref={inputNameRef}
          errorText={'Ошибка'}
          size={undefined}
        />
        <Input
          className={`${styles.register_input}`}
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}
          name={'email'}
          error={false}
          ref={inputEmailRef}
          errorText={'Ошибка'}
          size={undefined}
        />
        <PasswordInput
          className={`${styles.register_input}`}
          type={'text'}
          placeholder={'Пароль'}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'password'}
          error={false}
          ref={inputPasswordRef}
          errorText={'Ошибка'}
          //size={'default'}
        />
        <Button type='primary' size='medium'>
          Зарегистрироваться
        </Button>
      </form>
      <p className={`${styles.register_footer} text text_type_main-default`}>
        Уже зарегистрированы?{' '}
        <a className={`${styles.register_link}`} href='#'>
          Войти
        </a>
      </p>
    </div>
  );
}

export default Register;
