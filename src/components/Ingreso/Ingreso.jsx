import FormIngreso from './FormIngreso'
import TableIngreso from './TableIngreso'
import React from 'react'
import { useState } from 'react'
import '../Estilos/Ingreso.css'


const baseDeDatos = [
  {id: 2, nombre: 'Colorada', cientifico: 'colorada colorina', fecha: '01/02/23'},
  {id: 1, nombre: 'Azul', cientifico: 'Azul colorina', fecha: '01/05/22'},
  {id: 3, nombre: 'Amarilla', cientifico: 'Amarilla colorina', fecha: ''},
  {id: 4, nombre: 'Purpura', cientifico: 'Purpura colorina', fecha: '10/04/23'}

]



const Ingreso = () => {
  const [ingreso, setIngreso] = useState(baseDeDatos)

  return (
    <div className='container-ingreso'>
      <FormIngreso />
      <TableIngreso ingreso={ingreso} />
      </div>
    )
    
   
  
}

export default Ingreso