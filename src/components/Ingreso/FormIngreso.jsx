import React from "react"
import '../Estilos/FormIngreso.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


// const baseDeDatos = [
//     { id: 1, nombre: 'Colorada', cientifico: 'colorada colorina' },
//     { id: 2, nombre: 'Azul', cientifico: 'Azul colorina' },
//     { id: 3, nombre: 'Amarilla', cientifico: 'Amarilla colorina' },
//     { id: 4, nombre: 'Purpura', cientifico: 'Purpura colorina' }

// ]

const FormIngreso = ({ addNombre }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        cientifico: '',
        id: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.nombre !== '' && formData.cientifico !== '') {
            formData.id = Math.random() * 100
            addNombre(formData)
            setFormData({
                nombre: '',
                cientifico: '',
                id: null
            })

        } else {
            alert('ingrese datos')
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(e.target)
    }

    return <>
        <form className="form-ingreso" onSubmit={handleSubmit} >
            <h2 className="titulo-ingreso" >Ingreso de fichas</h2>
            <label htmlFor="nombre" className='etiqueta'>Nombre:</label>
            <input type="tex" name='nombre' className="campo" onChange={handleChange} value={formData.nombre} />
            <label htmlFor="cientifico" className='etiqueta'>Nombre científico:</label>
            {/* <input type="tex" name='fecha' className="campo"  />
            <label htmlFor="fecha" className='etiqueta'>Fecha de compra</label> */}
            <input type="tex" name='cientifico' className="campo" onChange={handleChange} value={formData.cientifico} />
            <main className="cont-btn">
                <input type='submit' value='Ingresar' className="btn ing" />
                <input type='reset' value='Cancelar' className="btn del" />
                <Link to='/salida' className="boton-salida" >Salir</Link>
            </main>

        </form>
    </>

}

export default FormIngreso