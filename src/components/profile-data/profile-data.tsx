import React, { useEffect } from 'react'; // импорт библиотеки
import { useDispatch } from './../../services/store';
import { updateUserInfo } from './../../services/actions/patch-user-info';
import { requestForUserInfo } from './../../services/actions/get-user-info';

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from './../../hooks/useForm';

import styles from './profile-data.module.css';

function ProfileData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestForUserInfo());
  }, [dispatch]);

  const { values, setValues, handleChange } = useForm({ name: localStorage.getItem('user_name'), email: localStorage.getItem('user_email'), password: '' });

  const [activateButtons, setActivateButtons] = React.useState(false);
  const inputNameRef = React.useRef(null);

  return (
    <form
      className={`${styles.profile_data_form}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (!values?.name || !values?.email || !values?.password) {
          alert(
            `введены не все значения \n Отсутствуют значения: \n${!values?.name ? '  Имени \n' : ''}${!values?.email ? '  Электронной почты \n' : ''}${
              !values?.password ? '  Пароля' : ''
            }\n повторите ввод`
          );
          setValues({ name: localStorage.getItem('user_name'), email: localStorage.getItem('user_email'), password: '' });
          return;
        }
        dispatch(updateUserInfo(values?.name, values?.email, values?.password));
      }}
    >
      <div className={'input_wrapper'}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => {
            handleChange(e);
            setActivateButtons(true);
          }}
          value={values?.name || ''}
          name={'name'}
          error={false}
          ref={inputNameRef}
          errorText={'Ошибка'}
          icon={'EditIcon'}
        />
      </div>
      <div className={'input_wrapper'}>
        <EmailInput
          onChange={(e) => {
            handleChange(e);
            setActivateButtons(true);
          }}
          value={values?.email || ''}
          name={'email'}
        />
      </div>
      <div className={'input_wrapper'}>
        <PasswordInput
          onChange={(e) => {
            handleChange(e);
            setActivateButtons(true);
          }}
          value={values?.password || ''}
          name={'password'}
        />
      </div>
      {activateButtons && (
        <div className={`${styles.profile_data_buttons_area}`}>
          <Button
            type='secondary'
            size='medium'
            onClick={(e) => {
              e.preventDefault();
              setValues({ name: localStorage.getItem('user_name'), email: localStorage.getItem('user_email'), password: '' });
            }}
          >
            Отмена
          </Button>
          <Button type='primary' size='medium'>
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export default ProfileData;
