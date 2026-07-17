import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ShopNow = () => {
  const navigate = useNavigate();
  return (
    <>
    <button className='bg-white rounded-4xl text-emerald-800 h-12 w-40 p-2 mt-7 flex justify-center items-center gap-3 text-xl' onClick={() => navigate("/products")}>Shop Now<FaGreaterThan/></button>
    </>
  )
}

export default ShopNow