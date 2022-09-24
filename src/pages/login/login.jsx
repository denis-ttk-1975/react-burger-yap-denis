import React, { useCallback } from 'react'; // импорт библиотеки
import { useDispatch } from 'react-redux';
import { useHistory, Link, useLocation } from 'react-router-dom';

import { Typography, Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from './../../hooks/useForm';

import styles from './login.module.css';

import { loginUser } from '../../services/actions/login';

function Login() {
  // const [valueEmail, setValueEmail] = React.useState('');
  // const [valuePassword, setValuePassword] = React.useState('');

  const { values, setValues, handleChange } = useForm({ email: '', password: '' });

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

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

          dispatch(loginUser(values?.email, values?.password));

          history.push({ pathname: location?.state?.from?.pathname || '/' });
        }}
      >
        <div className={'input_wrapper'}>
          <EmailInput className={`${styles.login_input}`} onChange={(e) => handleChange(e)} value={values?.email || ''} name={'email'} />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput className={`${styles.login_input}`} onChange={(e) => handleChange(e)} value={values?.password || ''} name={'password'} />
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
