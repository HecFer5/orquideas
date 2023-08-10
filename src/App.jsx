import React from 'react';
import { ReactDOM } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Ingreso from './components/Ingreso/Ingreso'


function App() {

  return (
    
<div className='container-fluid p-3 d-flex flex-row'>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/ingreso' element={<Ingreso/>} />
          <Route path='*' element={<h2>NO HAY NINGUNA RUTA</h2>} />
        </Routes>
      </div>


    </div>

  )
}

export default App

