import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Estilos/Menu.css'


const Menu = () => {
    return (
        <main className='container-menu'>
            <div className="orquideas-card uno">

            </div>
            <div className="orquideas-card dos">
                <Link to='/ingreso' className='opcion'>Ingresos</Link>
               
            </div>
            <div className='orquideas-card tres'>
                <Link to='/tareas' className='opcion'>Tareas</Link>
            </div>
            <div className="orquideas-card cuatro">

            </div>
        </main>
    )
}

export default Menu