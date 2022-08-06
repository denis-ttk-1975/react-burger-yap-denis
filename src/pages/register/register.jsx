import React from 'react'; // импорт библиотеки
import { useHistory, Link } from 'react-router-dom';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './register.module.css';
import './../pages.css';

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
      <form className={`${styles.register_form}`} style={{ width: 480 }}>
        <div className={'input_wrapper'}>
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
          />
        </div>
        <div className={'input_wrapper'}>
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
          />
        </div>
        <div className={'input_wrapper'}>
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
          />
        </div>
        <Button type='primary' size='medium'>
          Зарегистрироваться
        </Button>
      </form>
      <p className={`${styles.register_footer} text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы?
        <Link to={{ pathname: `/login` }} className={`${styles.register_link}`}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
