import React from 'react'
import '../Estilos/TableIngreso.css'
import Slides from '../Comunes/Slides'
import { Link } from 'react-router-dom'


const TableIngreso = ({ nombres }) => {

    return <>

        <table className='tabla-ingreso'>

            <thead>
                <tr>
                    <td>#</td>
                    <td>Especie</td>
                    <td>Nombre científico</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    nombres.length === 0 ? <td>No hay datos</td>
                        : nombres.map((nombre, index) => {
                            return <tr key={index}>
                                <td>{nombre.id}</td>
                                <td>{nombre.nombre}</td>
                                <td>{nombre.cientifico} </td>
                                <td>{nombre.fecha} </td>
                                <td>
                                    
                                    <button className='btn ing'>Editar</button>
                                    <button className='btn del'>Eliminar</button>
                                </td>
                            </tr>

                        })
                }
            </tbody> 
            <Link to='/salida' className="boton-salida" >Salir</Link>
        </table>
        <main className="cont-btn">

           
        </main>
    </>
}

export default TableIngreso