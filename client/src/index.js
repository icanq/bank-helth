import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Reset } from 'styled-reset';
import { GlobalStyle} from './styled'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Reset/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);