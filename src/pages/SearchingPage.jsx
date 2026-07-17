import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import searchingPageImg from "../assets/images/searchingPageImg.png"


const SearchingPage = () => {
  return (
    <>
    <div className='flex-1'>
      <Header/>
    <img src={searchingPageImg} className='w-full h-150 object-contain'></img>
    </div>
    
    <Footer/>
    </>
  )
}

export default SearchingPage

