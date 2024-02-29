import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar size={5}/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App