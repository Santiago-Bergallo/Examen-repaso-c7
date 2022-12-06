import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
