import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

//cookies.set('cookie1', 'value1', { SameSite: 'strict', secure: true });
//cookies.set('sameSite','None',{secure: true, path: '/' })
//cookies.set('cookie2', 'value2', { sameSite: 'strict', secure: true });
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
