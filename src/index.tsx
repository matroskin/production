import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
