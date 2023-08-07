import React from 'react'
import './Estilos/Principal.css'
import orquidea1 from './Imagenes/orquidea1.jpg'
import { Link } from 'react-router-dom'

const Principal = () => {
  return (
    <>         

       <div className="container">
          <div className='orquideas-card uno' ></div>
          
          <div className='orquideas-card dos' >
              <Link to='/ingresos' className='opcion'>Ir a pantalla de Ingresos</ Link>
          </div>
          <div className='orquideas-card tres' >
          </div>
         
          <div className='orquideas-card cuatro' ></div>
        </div>






    </>

  )
}

export default Principal