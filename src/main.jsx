import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MemeProvider } from './context/MemeContext';
import { ThemeProviderWrapper } from './context/ThemeContext'; // UWAGA: zmieniamy nazwę, bo ThemeProvider jest z MUI
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <CssBaseline />
        <MemeProvider>
          <App />
        </MemeProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
