import React from 'react';
import { useDispatch } from './../../services/store';
import { useHistory, Link, Redirect } from 'react-router-dom'; // импорт библиотеки

import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm';
import { THistory } from '../../services/types/types';

import styles from './reset-password.module.css';

import { resetUserPassword } from '../../services/actions/reset-password';

function ResetPassword() {
  const { values, setValues, handleChange } = useForm({ email: '', code: '' });

  const dispatch = useDispatch();

  const history = useHistory<any>();

  if (!history.location?.state?.fromForgotPassword) {
    return <Redirect to={'/forgot-password'} />;
  }

  return (
    <div className={`${styles.reset_passwordBox}`}>
      <p className={`${styles.reset_password_title} text text_type_main-medium`}>Восстановление пароля</p>
      <form
        className={`${styles.reset_password_form}`}
        onSubmit={(e) => {
          e.preventDefault();
          const password = values?.password;
          const code = values?.code;
          if (!!code && !!password) {
            dispatch(resetUserPassword(password, code));
          }

          history.push({ pathname: '/' });
        }}
      >
        <div className={'input_wrapper'}>
          <PasswordInput onChange={(e) => handleChange(e)} value={values?.password || ''} name={'password'} />
        </div>

        <div className={'input_wrapper'}>
          <Input type={'text'} placeholder={'Введите код из письма'} onChange={(e) => handleChange(e)} value={values?.code || ''} name={'code'} error={false} errorText={'Ошибка'} />
        </div>
        <Button type='primary' size='medium'>
          Сохранить
        </Button>
      </form>
      <p className={`${styles.reset_password_footer} text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?
        <Link to={{ pathname: `/login` }} className={`${styles.reset_password_link}`}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
