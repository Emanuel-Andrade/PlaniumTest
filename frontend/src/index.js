import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {UseRegisterStatesProvider} from './contexts/RegisterStates'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseRegisterStatesProvider>
      <App />
    </UseRegisterStatesProvider>
  </React.StrictMode>
);

