import TableIngreso from '../Ingreso/TableIngreso'
import React from 'react'
import { useState, useEffect } from 'react'
import '../Estilos/Ingreso.css'


// const baseDeDatos = [
//   { id: 1, nombre: 'Colorada', cientifico: 'colorada colorina' },
//   { id: 2, nombre: 'Azul', cientifico: 'Azul colorina' },
//   { id: 3, nombre: 'Amarilla', cientifico: 'Amarilla colorina' },
//   { id: 4, nombre: 'Purpura', cientifico: 'Purpura colorina' }

// ]



const VerTareas = () => {
useEffect(() => {
  fetch("http://localhost:3004/nombres")
    .then((response) => response.json())
    .then((data) => {
      setNombres(data)
    })
}, [])
  const [nombres, setNombres] = useState([])

  const addNombre = (nombre) => {
    setNombres([
      ...nombres, nombre
    ])

  }
  return (
    <div className='container-ingreso'>
      <TableIngreso nombres={nombres} />
    </div>
  )



}

export default VerTareas