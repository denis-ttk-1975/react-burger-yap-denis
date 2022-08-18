import React from 'react'; // импорт библиотеки
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { Box, Typography, BurgerIcon, ListIcon, ProfileIcon, Logo, Button, PasswordInput, Input, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from './../../hooks/useForm';

import styles from './register.module.css';

import { registerNewUser } from './../../services/actions/register';

function Register() {
  // const [valueName, setValueName] = React.useState('');
  // const [valueEmail, setValueEmail] = React.useState('');
  // const [valuePassword, setValuePassword] = React.useState('');

  const { values, setValues, handleChange } = useForm({});

  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.userRegistration);

  return (
    <div className={`${styles.registerBox}`}>
      <p className={`${styles.register_title} text text_type_main-medium`}>Регистрация</p>
      <form
        className={`${styles.register_form}`}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(registerNewUser(values?.name, values?.email, values?.password));

          history.push({ pathname: '/' });
        }}
      >
        <div className={'input_wrapper'}>
          <Input className={`${styles.register_input}`} type={'text'} placeholder={'Имя'} onChange={(e) => handleChange(e)} value={values?.name} name={'name'} error={false} errorText={'Ошибка'} />
        </div>
        <div className={'input_wrapper'}>
          <EmailInput className={`${styles.register_input}`} onChange={(e) => handleChange(e)} value={values?.email} name={'email'} />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput className={`${styles.register_input}`} onChange={(e) => handleChange(e)} value={values?.password} name={'password'} />
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
