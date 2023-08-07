import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cards from './components/Cards'
import Ingresos from './components/Ingresos'
import Principal from './components/Principal'
import './App.css'

function App() {


  return (
    <>



      <Principal />

      <Routes>
        <Route path='/ingresos' element={<Ingresos />} />
        <Route path='*' element={<Principal />} />
      </Routes>


    </>
  )
}

export default App
