import NavBar from './components/NavBar'
import Buscador from './components/Buscador'
import { Route, Routes } from 'react-router-dom'
import Cards from './components/Cards'
import Ingresos from './components/Ingresos'
import Agenda from './components/Agenda'
import Principal from './components/Principal'

function App() {


  return (
    <>
      <div >
        <NavBar />
        <div>
          <Routes>
            <Route path='/cards' element={<Cards />} />
            <Route path='/ingresos' element={<Ingresos />} />
            <Route path='/agenda' element={<Agenda />} />

            {/* <Route path='*' element={<h2>NO HAY NINGUNA RUTA</h2>} /> */}
          </Routes>
        </div>
        <Principal/>
      </div>


      {/* <Buscador /> */}
    
    </>
  )
}

export default App
