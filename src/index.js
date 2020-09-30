import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './assets/css/common.css';
import './assets/css/login.css';
import './assets/css/style.css';
import './assets/alibabaFont/iconfont.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import App from './App';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

