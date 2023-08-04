import React from 'react'
import './Buscador.css'
import { Buscar, LogoFlor } from './icons'

const Buscador = () => {
    return (
        <> 
            <h3 className='titulo'>Listado de especies de orquideas</h3>
           
            <section className='container-buscar'>
                <input type="text" placeholder='Agregar nombre de la especie' className='input-buscar' />
                <button className='btn-buscar'>
                    <Buscar />
                    Buscar
                </button>
            </section>
        </>
    )
}

export default Buscador