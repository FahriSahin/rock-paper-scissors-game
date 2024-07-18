import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <App />
    <Footer/>
  </>
);

reportWebVitals();
