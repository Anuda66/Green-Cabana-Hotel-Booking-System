import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cabanas from './pages/Cabanas'
import Experiences from './pages/Experiences'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Booking from './pages/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cabanas" element={<Cabanas />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
