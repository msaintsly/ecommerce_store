import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { FiTrash2 } from 'react-icons/fi';
import CartDetails from '../../pages/cart/CartDetails';
import { useAuth } from '../../context/AuthContext'; // ✅ import auth
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ for redirect

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);
  const { isAuthenticated } = useAuth(); // ✅ check login
  const [thankYouMessage, setThankYouMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // ✅ redirect to login and remember this page
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    clearCart();
    setThankYouMessage("🎉 Thank you for your purchase! We hope to see you again.");
  };

  return (
    <div className="flex justify-between p-5">
      <div className="bg-white w-2/3 p-4 mt-5">
        <div className="flex justify-between font-bold">
          <h1>SHOPPING CART</h1>
          <h1>Items: {quantity}</h1>
          <FiTrash2 onClick={clearCart} className="text-xl cursor-pointer" />
        </div>

        <div className="flex justify-between mt-5 font-bold">
          <span>Product Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        <div className="mt-5">
          {cart.length > 0 ? (
            cart.map((item) => <CartDetails item={item} key={item.item} />)
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 w-1/3 p-5 mt-5">
        <h2 className="text-lg font-bold mb-5">Cart Summary</h2>

        <div className="flex justify-between">
          <span>Items</span>
          <span>{quantity}</span>
        </div>

        <div className="mt-5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>&#8358;{isNaN(total) ? 0 : total}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-black text-lg mt-3">
            <span>Total Cost</span>
            <span>&#8358;{isNaN(total) ? 0 : total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white rounded w-full mt-5 hover:bg-blue-600 p-3"
          >
            CHECKOUT
          </button>

          {thankYouMessage && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              {thankYouMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;