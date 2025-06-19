import React, { useContext, useState } from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
import logo_img from '../assets/SlyStocks.png'

const Navbar = () => {

    const {quantity, searchProducts } = useContext(ShopContext)

    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
      setQuery(e.target.value)
      searchProducts(e.target.value)
    }
  return (
    <div>
      <div id="navbar" className='Navbar flex justify-between items-center px-12 py-2 w-full z-50 transition-all duration-500 bg-blue-500'>
        <Link to='/'>
          <div>
            <img src={logo_img} alt="" className='w-1/4 rounded-2xl ml-4' />
        </div>
        <div>
          <h2 className='text-xl text-white '>SlyStocks</h2>
        </div>
        </Link>
        <div className='relative search flex items-center'>
          <BiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500'/>
          <input
          value={query}
          onChange={handleSearch}
          type="text" placeholder='Search products here' className='pl-12 bg-white rounded-full pr-10 py-3 w-130 border-2 border-white focus:outline-none'/>
        </div>
        <div className='flex items-center space-x-8'>
        <Link to="/cart" className="relative">
          <BiCart className="text-3xl text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
            {quantity}
          </span>
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
         <BiUser className='text-3xl text-white' />
      </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar