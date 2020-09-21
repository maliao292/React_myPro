import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.css';
import './assets/css/login.css';
import './assets/css/style.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

