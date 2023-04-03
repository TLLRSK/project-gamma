import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Contacto from './views/Contacto'

function App() {
  return (
    <>
    <header>
      <h1>proyecto gamma</h1>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </main>
    </>
  )
}

export default App