import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Multiple from './Form/Form.js'
import FullWidthGrid from './Form/Grid.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Multiple /> */}
    <FullWidthGrid />
  </React.StrictMode>
);


