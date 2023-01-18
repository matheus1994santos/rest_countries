import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { lightMode, darkMode } from './utils/theme';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

