import React from 'react'; // импорт библиотеки
import { useHistory, Link } from 'react-router-dom';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './forgot-password.module.css';

function ForgotPassword() {
  const [valueEmail, setValueEmail] = React.useState('');

  const inputEmailRef = React.useRef(null);

  return (
    <div className={`${styles.forgot_passwordBox}`}>
      <p className={`${styles.forgot_password_title} text text_type_main-medium`}>Восстановление пароля</p>
      <form className={`${styles.forgot_password_form}`} style={{ width: 480 }}>
        <div className={'input_wrapper'}>
          <Input
            type={'text'}
            placeholder={'Укажите e-mail'}
            onChange={(e) => setValueEmail(e.target.value)}
            value={valueEmail}
            name={'email'}
            error={false}
            ref={inputEmailRef}
            errorText={'Ошибка'}
          />
        </div>
        <Button type='primary' size='medium'>
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
