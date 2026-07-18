import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ShopNow = () => {
  const navigate = useNavigate();
  return (
    <>
    <button className='bg-white rounded-4xl text-emerald-800 h-8 md:h-10 md:w-32 lg:h-12 lg:w-40 p-2 mt-3 md:mt-4 lg:mt-7 flex justify-center items-center gap-1 lg:gap-3 text-sm lg:text-xl' onClick={() => navigate("/products")}>Shop Now<FaGreaterThan/></button>
    </>
  )
}

export default ShopNow