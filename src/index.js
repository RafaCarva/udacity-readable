import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//router
import { BrowserRouter } from 'react-router-dom';
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//importa o agrupador de reducers
import MeusReducers from './reducers/index'


ReactDOM.render((
  <Provider store={createStore(MeusReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
