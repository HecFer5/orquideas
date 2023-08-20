import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Estilos/Menu.css'


const Menu = () => {


    return (
        <>
           <main className='container-menu'>
           
            <div className="orquideas-card dos">
                <Link to='/todolist' className='opcion' >Ingresar</Link>
            </div>
            <div className='orquideas-card tres'>
                <Link to='/tareas' className='opcion'>Tareas</Link>
            </div>
          
        </main>
    
        </>
     
    )
}

export default Menu