import React from 'react'
// import { LogoFlor } from './icons'
import './Estilos/NavBar.css'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

const NavBar = () => {
    return (
        <nav>
            {/* <LogoFlor /> */}
            <div className='opciones-barra' >
                <Link className='opciones' to='/cards' >Cards</Link>
                <Link className='opciones' to='/ingresos' >Ingresos</Link>
                <Link className='opciones' to='/agenda' >Agenda</Link>
                <Link className='opciones' to='/*' >v</Link>

            </div>
            <Buscador/>
        </nav>

    )
}

export default NavBar

{/* <div className='switch'> 
                <Sol/>
               
                <label>
                    <input type="checkbox" className='check-switch' hidden/>
                    <span className='slider'></span>
                </label>
                 <Luna/>
            </div> */}