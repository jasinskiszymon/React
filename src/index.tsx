import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/MainPage';
import { Reset } from 'styled-reset';

import {Provider} from "react-redux";
import store from './tools/store';


ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <Reset />
    <MainPage />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

