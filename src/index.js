import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CalculaGorjeta from './componentes/Calculadora/Calculadora'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers/index'

const store = createStore(combineReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CalculaGorjeta/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
