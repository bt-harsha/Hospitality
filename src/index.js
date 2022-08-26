import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Navbar } from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar />
      <App />

  </React.StrictMode>
);


