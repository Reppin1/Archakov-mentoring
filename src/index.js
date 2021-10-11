import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ProfileClass, ProfileFunc } from './tutorial-1/App';

ReactDOM.render(
  <React.StrictMode>
    <ProfileClass name='Вася' registredAt={ new Date(2021, 5, 22) } />
    <ProfileFunc name='Вася' registredAt={ new Date(2021, 5, 22) } />
  </React.StrictMode>,
  document.getElementById('root')
);

