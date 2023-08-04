import NavBar from './components/NavBar'
import Buscador from './components/Buscador'
import Cards from './components/Cards'
import { Route, Routes } from'react-router-dom'

function App() {
  

  return (
<>
<div className='container-fluid p-3 d-flex flex-row'>
      <NavBar />
      <div>
        <Routes>
           <Route path='/cards' element={<Cards/>} /> 
      
          {/* <Route path='*' element={<h2>NO HAY NINGUNA RUTA</h2>} /> */}
        </Routes>
      </div>


    </div>


<Buscador/>
{/* <Cards/> */}

</>
  )
}

export default App
