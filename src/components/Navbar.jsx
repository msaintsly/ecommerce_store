import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import logo_img from "../assets/SlyStocks.png";
import { ShopContext } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { quantity, searchProducts } = useContext(ShopContext);
  const [query, setQuery] = useState("");
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div
        id="navbar"
        className="Navbar flex justify-between items-center px-12 py-2 w-full z-50 transition-all duration-500 bg-blue-500">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo_img} alt="Logo" className="w-12 h-12 rounded-2xl" />
          <h2 className="text-xl text-white font-bold">SlyStocks</h2>
        </Link>

        <div className="relative search flex items-center">
          <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          <input
            value={query}
            onChange={handleSearch}
            type="text"
            placeholder="Search products here"
            className="pl-12 bg-white rounded-full pr-10 py-3 w-130 border-2 border-white focus:outline-none"/>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <BiCart className="text-3xl text-white" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
              {quantity}
            </span>
          </Link>

          <Link to="/contact">
            <BiUser className="text-3xl text-white" />
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition">
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition">
                Login
              </Link>

              <Link
                to="/signup"
                className="text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-600 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;