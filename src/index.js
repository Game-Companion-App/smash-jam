import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
// import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <Router>
        <App />
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

