import React from 'react'
import { useState } from 'react'




const Todolist = () => {
    const [ingreso, setIngreso] = useState([
        {
            nombre: 'uno',
            cientifico: 'cienuno',
            id: 1
        },
        {
            nombre: 'dos',
            cientifico: 'ciedos',
            id: 2
        }
    ]

    );

    const [formData, setFormData] = useState({ nombre: '', cientifico: '' });
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const addIngreso = (e) => {
        e.preventDefault();
        if (formData.nombre !== '' && formData.cientifico !== '') {
            const lista = formData;
            setIngreso([...ingreso, lista]);
            console.log(lista)
            setFormData({ nombre: '', cientifico: '' })


            //******ingresan los datos a mysql */

            fetch("http://localhost/nombres/?insertar=1", {
                method: 'POST',
                body: JSON.stringify(lista)
            })
                .then(respuesta => respuesta.json())
                .then((datosRespuesta) => {
    
                    console.log(datosRespuesta);
                })
                //********************** */
        }

    }

    return (

        <div className='container w-75'>
            <br />
            <br />
            <br />
            <br />
            <br /> 
            <div className="shadow rounded p-3 mt-5 w-100">
                <div className='list-group-item'>
                    <h5>Ingreso de datos</h5>
                </div>
            <form className='input-group input-group-lg' onSubmit={addIngreso}>
                <input className='form-control' name='nombre' type="text" placeholder='nombre común' value={formData.nombre} onChange={handleChange} />
                <input className='form-control' name='cientifico' type="text" placeholder='nombre científico' value={formData.cientifico} onChange={handleChange} />
                <input className='btn btn-primary' type="submit" value='Ingresar los datos' />
            </form>
           

            </div>
        </div>
    )
}

export default Todolist