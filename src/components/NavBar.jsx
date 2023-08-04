import React from 'react'
import {  Sol, Luna, LogoFlor } from './icons'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
             <LogoFlor/>
             <div >
            <h2 > Menu </h2>
            <Link to='/cards' >Cards</Link>
           
        </div>

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