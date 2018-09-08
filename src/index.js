import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//start init
document.body.style.margin = '0px'
var root = document.getElementById('root');
root.style.height = '100%';
root.style.width = '100%';
root.style.padding = '0px'
//end init
ReactDOM.render(<App />, root);