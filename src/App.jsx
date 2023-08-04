import './App.scss'
import CarList from './components/pages/CarList/CarList'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/shared/Navbar/Navbar'
import CarDetails from './components/pages/CarDetails/CarDetails'

function App() {

  return (
    <section className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CarList/>}/>
        <Route path='/car/:id' element={<CarDetails/>}/>
      </Routes>
    </section>
  )
}

export default App
