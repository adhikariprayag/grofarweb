import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Product from './pages/Product'
import Stt from './components/Stt'
import Cat from './pages/Cat'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar size={Cart.length}/>
      <Stt/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cat/:cid" element={<Cat/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App