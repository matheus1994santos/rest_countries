import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { lightMode, darkMode } from './utils/theme';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkMode}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

