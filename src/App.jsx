import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Cart from './pages/cart/Cart'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import VoiceScreenshot from './components/VoiceScreenshot'


const App = () => {
  return (
    <>
      <div>
      <VoiceScreenshot />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<ProductDetails />} />        
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
    </>

  )
}

export default App