import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CalculaGorjeta from './componentes/Calculadora/Calculadora'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CalculaGorjeta/>
  </React.StrictMode>,
  document.getElementById('root')
);
