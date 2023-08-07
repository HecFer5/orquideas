import React from 'react'
import './Estilos/Buscador.css'
import { Buscar, LogoFlor } from './icons'

const Buscador = () => {
    return (
        <>

            <section className='container-buscar'>
                <input type="text" placeholder='Ingrese la búsqueda' className='input-buscar' />
                <button className='btn-buscar'>
                    <Buscar />
                    Buscar
                </button>
            </section>
        </>
    )
}

export default Buscador