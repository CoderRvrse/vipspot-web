// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create the root and render App in React 18 style
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
