import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './forgot-password.module.css';

import { sendForgotPasswordRequest } from './../../services/actions/forgot-password';

function ForgotPassword() {
  const [valueEmail, setValueEmail] = React.useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const location = {
    pathname: '/reset-password',
    state: { fromForgotPassword: true },
  };

  return (
    <div className={`${styles.forgot_passwordBox}`}>
      <p className={`${styles.forgot_password_title} text text_type_main-medium`}>Восстановление пароля</p>
      <form className={`${styles.forgot_password_form}`}>
        <div className={'input_wrapper'}>
          <EmailInput onChange={(e) => setValueEmail(e.target.value)} value={valueEmail} name={'email'} />
        </div>
        <Button
          type='primary'
          size='medium'
          onClick={(e) => {
            e.preventDefault();
            history.push(location);
            dispatch(sendForgotPasswordRequest(valueEmail));
          }}
        >
          Восстановить
        </Button>
      </form>
      <p className={`${styles.forgot_password_footer} text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?
        <Link to={{ pathname: `/login` }} className={`${styles.forgot_password_link}`}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
