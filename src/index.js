import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//importa o agrupador de 


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
