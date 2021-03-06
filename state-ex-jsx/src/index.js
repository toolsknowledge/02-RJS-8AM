import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Fourth from "./Fourth";

ReactDOM.render(
  <React.StrictMode>
    <Fourth />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
