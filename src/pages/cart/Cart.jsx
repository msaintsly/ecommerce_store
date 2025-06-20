import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetails from '../../pages/cart/CartDetails'

const cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext)
  return (
    <div className='flex justify-between p-5'>
      <div className='bg-white w-2/3 p-4 mt-5'>
        <div className='flex justify-between font-bold'>
          <h1 className='flex justify-between font-bold'>SHOPPING CART</h1>
          <h1>Items: {quantity} </h1>
          <FiTrash2 onClick={clearCart} className='text-xl cursor-pointer' /> 
        </div>
        <div className='flex justify-between mt-5 font-bold'>
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        <div className='mt-5'>
          {
            cart.length > 0 ? (
              cart.map((item) => <CartDetails item={item} key={item.item} />)
            ) : (
              <p>Your cart is empty</p>
            )
          }
        </div>
      </div>
      <div className='rounded-lg bg-gray-100 w-1/3 p-5 mt-5'>
        <h2 className='text-lg font-bold mb-5'>Cart summary</h2>
        <div className='flex justify-between'>
          <span>Items</span>
          <span> {quantity} </span>
        </div>
        <div className='mt-5'>
          <div className='flex justify-between'><span>Subtotal</span>
          <span>&#8358;{isNaN(total) ? 0 : total}</span>
          </div>
          <div className='flex justify-between'>
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <div className='flex justify-between font-black text-lgmt-3'>
            <span>Total Cost</span>
            <span>&#8358;{isNaN(total) ? 0 : total}</span>
          </div>
          <button 
          className='bg-blue-500 text-white rounded w-full mt-5 hover:bg-blue-600 p-3'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default cart