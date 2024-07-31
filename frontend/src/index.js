import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Dynamically add the Google Fonts link
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);