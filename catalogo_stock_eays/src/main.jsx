import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Home from './Pages/Home.jsx';
import Catalogo from './Pages/Catalogo.jsx';
import Search from './Pages/Search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
        <Route element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='Catalago/:id' element={<Catalogo/>}/>
            <Route path='search' element={<Search/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
