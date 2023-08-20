import FormIngreso from './FormIngreso'
import TableIngreso from './TableIngreso'
import React from 'react'
import { useState, useEffect } from 'react'
import '../Estilos/Ingreso.css'
import Slides from '../Comunes/Slides'


// const baseDeDatos = [
//     { id: 1, nombre: 'Colorada', cientifico: 'colorada colorina' },
//     { id: 2, nombre: 'Azul', cientifico: 'Azul colorina' },
//     { id: 3, nombre: 'Amarilla', cientifico: 'Amarilla colorina' },
//     { id: 4, nombre: 'Purpura', cientifico: 'Purpura colorina' }

// ]



const ApiIngreso = () => {
    const [editData, setEditData] = useState(null);
    const [nombres, setNombres] = useState([])

    useEffect(() => {
         fetch("http://localhost:3004/nombres")
        .then((response) => response.json())
        .then((data) => {
          setNombres(data)
        })
      }, [])

      


      
    const addNombre = (nombre) => {
        setNombres([
            ...nombres, nombre
        ])

        // const editNombre = (nombre) => { }

        // const delNombre = id => { }

    }
    return (
        <div className='container-ingreso'>
            <FormIngreso addNombre={addNombre}  />
            <TableIngreso nombres={nombres}  />
        </div>
    )

// editNombre={editNombre} editData={editData}
// setEditNombre={setEditNombre} delNombre={delNombre}

}

export default ApiIngreso