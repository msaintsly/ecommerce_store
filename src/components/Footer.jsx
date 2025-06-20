import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import logo_img from '../assets/SlyStocks.png'

const Footer = () => {

  return (
    <div className="bg-black text-white pb-2">
      <div className="flex justify-between items-center px-8 py-2 border-b-2 border-gray-600">
        <div className="text-2xl font-bold">
          <img src={logo_img} alt="" className='w-1/4 rounded-2xl ml-4' />
        </div>

        <div className="flex space-x-4">
          <FaFacebook className="text-xl cursor-pointer hover:text-gray-400" />
          <BsInstagram className="text-xl cursor-pointer hover:text-gray-400" />
          <BsTwitterX className="text-xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>
      
      <div className="text-center py-2">
        <p>Copyright © SlyStocks 2025. All rights reserved</p>
        <a href="#navbar" className="text-blue-500 hover:underline">
         Back to Top
        </a>
      </div>
    </div>
    
  );
};

export default Footer;