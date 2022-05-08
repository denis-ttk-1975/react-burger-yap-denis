import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, Icons, Typography, Button, ConstructorElement, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from './../app-header/app-header';

import styles from './app.module.css';

function App() {
  return (
    <div className='App'>
      <AppHeader />
    </div>
  );
}

export default App;
