import React from 'react';
import { ReactDOM } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ApiIngreso from './components/Ingreso/ApiIngreso'
import Tareas from './components/Tareas/Tareas'
import PantallaInicial from './components/PntallaInicial';
import Todolist from './components/Todolist';




function App() {

  return (

    <div className='container-fluid p-3 d-flex flex-row'>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/ingreso' element={<ApiIngreso />} />
          <Route path='/tareas' element={<Tareas />} />
          <Route path='/salida' element={<PantallaInicial/>} />
          <Route path='/todolist' element={<Todolist/>} />
          <Route path='/*' element={<PantallaInicial/>} />
          
        </Routes>
      </div>


    </div>

  )
}

export default App

