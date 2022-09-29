import React from 'react'; // импорт библиотеки
import { useDispatch } from './../../services/store';
import { useHistory, Link } from 'react-router-dom';

import { Button, PasswordInput, Input, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm';

import styles from './register.module.css';

import { registerNewUser } from '../../services/actions/register';

function Register() {
  const { values, setValues, handleChange } = useForm({ name: '', email: '', password: '' });

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={`${styles.registerBox}`}>
      <p className={`${styles.register_title} text text_type_main-medium`}>Регистрация</p>
      <form
        className={`${styles.register_form}`}
        onSubmit={(e) => {
          e.preventDefault();

          if (!values?.name || !values?.email || !values?.password) {
            alert(
              `введены не все значения \n Отсутствуют значения: \n${!values?.name ? '  Имени \n' : ''}${!values?.email ? '  Электронной почты \n' : ''}${
                !values?.password ? '  Пароля' : ''
              }\n повторите ввод`
            );
            setValues({ name: '', email: '', password: '' });
            return;
          }

          dispatch(registerNewUser(values?.name, values?.email, values?.password));

          history.push({ pathname: '/' });
        }}
      >
        <div className={'input_wrapper'}>
          <Input
            // className={`${styles.register_input}`}
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => handleChange(e)}
            value={values?.name || ''}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
          />
        </div>
        <div className={'input_wrapper'}>
          <EmailInput onChange={(e) => handleChange(e)} value={values?.email || ''} name={'email'} />
        </div>
        <div className={'input_wrapper'}>
          <PasswordInput onChange={(e) => handleChange(e)} value={values?.password || ''} name={'password'} />
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
