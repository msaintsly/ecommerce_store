import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Cart from './pages/cart/Cart'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import VoiceScreenshot from './components/VoiceScreenshot'
import Login from "./pages/Login"
import Logout from './pages/Logout'
import Signup from './pages/Signup'


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
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
    </>

  )
}

export default App