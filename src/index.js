import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './App.js';
import { GlobalStyle } from './components/Globalstyl/Globalstyle.js';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
