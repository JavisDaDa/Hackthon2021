import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
  document.getElementById('root')
);
