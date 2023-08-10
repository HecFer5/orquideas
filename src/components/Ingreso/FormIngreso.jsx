import React from "react"
import '../Estilos/FormIngreso.css'

const FormIngreso = () => {
    return <>
        <h2 className="titulo-ingreso">Ingreso de fichas</h2>
        <form>
            <label htmlFor="nombre" className='etiqueta'>Nombre:</label>
            <input type="tex" name='nombre' className="campo" />
            <label htmlFor="nombre-cientifico" className='etiqueta'>Nombre científico:</label>
            <input type="tex" name='fecha' className="campo" />
            <label htmlFor="fecha" className='etiqueta'>Fecha de compra</label>
            <input type="tex" name='nombre-cientifico' className="campo" />
            <main className="cont-btn">
                <input type='submit' value='Ingresar' className="btn ing" />
                <input type='reset' value='Camcelar' className="btn del" />
            </main>
        </form>
    </>

}

export default FormIngreso