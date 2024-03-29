import React, { useCallback } from 'react'; // импорт библиотеки
import { useDispatch } from './../../services/store';
import { useHistory, Link, useLocation } from 'react-router-dom';

import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm';

import styles from './login.module.css';
import { TLocationState } from './../../services/types/types';

import { loginUser } from '../../services/actions/login';

function Login() {
  const { values, setValues, handleChange } = useForm({ email: '', password: '' });

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocationState>();

  const login = useCallback(() => {
    history.replace({ pathname: '/login' });
  }, [history]);

  return (
    <div className={`${styles.loginBox}`}>
      <p className={`${styles.login_title} text text_type_main-medium`}>Вход</p>
      <form
        className={`${styles.login_form}`}
        onSubmit={(e) => {
          e.preventDefault();
          const email = values?.email;
          const password = values?.password;
          if (!!email && !!password) {
            dispatch(loginUser(email, password));
          }
          history.push({ pathname: location?.state?.from?.pathname || '/' });
        }}
      >
        <div className={'input_wrapper'}>
          <EmailInput onChange={(e) => handleChange(e)} value={values?.email || ''} name={'email'} />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput onChange={(e) => handleChange(e)} value={values?.password || ''} name={'password'} />
        </div>

        <Button type='primary' size='medium'>
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
