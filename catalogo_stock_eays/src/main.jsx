// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Catalogo from './Pages/Catalog'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Catalogo />} /> 
          <Route path="catalogo/:id" element={<Catalogo />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
