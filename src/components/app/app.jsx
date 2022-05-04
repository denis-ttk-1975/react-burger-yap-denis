import React from 'react'; // импорт библиотеки
import ReactDOM from 'react-dom';

import { Box, Icons, Typography, Button, ConstructorElement, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app.module.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Edit and save to reload.</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>

      <Logo />
    </div>
  );
}

export default App;
