import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

ReactDOM.render(
  <>
    <App />
    <Button type='primary' size='medium'>
      Я кнопка из UI системы Yandex
    </Button>
  </>,
  document.getElementById('root')
);
reportWebVitals();
