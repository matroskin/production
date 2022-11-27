import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
