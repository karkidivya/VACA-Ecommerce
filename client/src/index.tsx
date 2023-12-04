import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// core styles are required for all packages
import './assets/styles/global.scss'



// disabling all console.log for production
if( process.env.NODE_ENV === 'production')
  console.log = () => {}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   
      <App />
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
