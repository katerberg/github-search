import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {User} from './User';
import * as fake from './mockResponse.json';

ReactDOM.render(
  <React.StrictMode>
    <User data={fake[0]} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);