import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App userInfo={getValue("userInfo")} userProfile={getValue("userProfile")}/>,
  document.getElementById('root')
);

function getValue(key) {
    let url = document.URL;
    let data = url.slice(url.lastIndexOf("?") + 1).split("&");
    for (let i = 0; i < data.length; i++) {
        let values = data[i].split("=");
        if (values[0] === key) return values[1];
    }
}