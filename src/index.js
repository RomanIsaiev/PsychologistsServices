import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/PsychologistsServices">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
