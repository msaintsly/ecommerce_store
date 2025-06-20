import React from 'react'
import hero_img from '../assets/nike-herosec.jpg'

const Hero = () => {

const scrollToProducts = () => {
  const section = document.getElementById("products");
  section?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div>
      <div className='grid w-full place-items-center bg-blue-300'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mt-10 text-white'>Welcome to SlyStocks, Where Smart Shopping Begins</h1>
          <p className='text-lg mt-3'>Explore a curated collection of style, and everyday essentials, all handpicked to elevate your lifestyle. At SlyStocks, we bring you quality, affordability, and convenience in one seamless shopping experience. Whether you're refreshing, upgrading, or finding the perfect gift, we've got something for everyone.</p>
        </div>
        
        <div className='justify-center mt-4'>
          <button
          onClick={scrollToProducts} className="px-10 py-4 mx-auto block text-2xl bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Our Collections
          </button>
          <img src={hero_img} className='w-{790px} h-{400px} mt-8 mb-5 rounded-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
