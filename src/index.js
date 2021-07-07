import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// import font awesome css
import '@fortawesome/fontawesome-free/js/all.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);