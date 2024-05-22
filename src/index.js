import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/PsychologistsServices">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
