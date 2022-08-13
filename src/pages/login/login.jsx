import React, { useCallback } from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { Typography, Logo, Button, PasswordInput, Input, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './login.module.css';

import { loginUser } from './../../services/actions/login';

function Login() {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(() => {
    history.replace({ pathname: '/login' });
  }, [history]);

  return (
    <div className={`${styles.loginBox}`}>
      <p className={`${styles.login_title} text text_type_main-medium`}>Вход</p>
      <form className={`${styles.login_form}`} style={{ width: 480 }}>
        <div className={'input_wrapper'}>
          <EmailInput className={`${styles.login_input}`} onChange={(e) => setValueEmail(e.target.value)} value={valueEmail} name={'email'} />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput className={`${styles.login_input}`} onChange={(e) => setValuePassword(e.target.value)} value={valuePassword} name={'password'} />
        </div>

        <Button
          type='primary'
          size='medium'
          onClick={(e) => {
            e.preventDefault();

            dispatch(loginUser(valueEmail, valuePassword));
          }}
        >
          Войти
        </Button>
      </form>
      <p className={`${styles.login_footer} text text_type_main-default text_color_inactive`}>
        Вы — новый пользователь?
        <Link to={{ pathname: `/register` }} className={`${styles.login_link}`}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={`${styles.login_footer} text text_type_main-default text_color_inactive`}>
        Забыли пароль?
        <Link to={{ pathname: `/forgot-password` }} className={`${styles.login_link}`}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}

export default Login;
