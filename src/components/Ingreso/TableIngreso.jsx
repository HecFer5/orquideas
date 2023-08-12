import React from 'react'
import '../Estilos/TableIngreso.css'


const TableIngreso = ({ ingreso }) => {

    return <>
        
        <table border='1' className='tabla-ingreso'>
            <h3 className='titulo-tabla'>Especies Ingresadas</h3>
            <tr>
                <td>#</td>
                <td>Especie</td>
                <td>Nombre científico</td>
                <td></td>
            </tr>
            {
                ingreso.length === 0 ? <tr>No hay datos</tr>
                    : ingreso.map((nombre, index) => {
                        return <tr key={index}>
                            <td>{nombre.id}</td>
                            <td>{nombre.nombre}</td>
                            <td>{nombre.cientifico} </td>
                            <td>{nombre.fecha} </td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    })
            }

        </table>
    </>
}

export default TableIngreso