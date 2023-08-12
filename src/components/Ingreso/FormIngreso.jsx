import React from "react"
import '../Estilos/FormIngreso.css'
import { Link } from 'react-router-dom'



const FormIngreso = () => {
    const Salida = () => {
        <Link to='/salida' className='opcion' >Ingresar</Link>
    }

    return <>
        <form className="form-ingreso" >
            <h2 className="titulo-ingreso" >Ingreso de fichas</h2>
            <label htmlFor="nombre" className='etiqueta'>Nombre:</label>
            <input type="tex" name='nombre' className="campo" />
            <label htmlFor="nombre-cientifico" className='etiqueta'>Nombre científico:</label>
            <input type="tex" name='fecha' className="campo" />
            <label htmlFor="fecha" className='etiqueta'>Fecha de compra</label>
            <input type="tex" name='nombre-cientifico' className="campo" />
            <main className="cont-btn">
                <input type='submit' value='Ingresar' className="btn ing" />
                <input type='reset' value='Cancelar' className="btn del" />
                <Link to='/salida' className="boton-salida" >Salir</Link>
            </main>

        </form>
    </>

}

export default FormIngreso