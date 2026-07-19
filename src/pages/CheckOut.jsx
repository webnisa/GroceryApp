import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ItemsInCheckOut from '../components/ItemsInCheckOut'
import PayForCheckOut from '../components/PayForCheckOut'
import UserDetailForCheckOut from '../components/UserDetailForCheckOut'

const CheckOut = () => {
  const {cart, setCart} = useContext(AppContext);



  return ( 
    <>
    <Header/>

      <div className="w-auto p-2 lg:p-5 md:block lg:block flex flex-col justify-center items-center">
        {/* <h1 className="text-4xl font-bold text-emerald-800 text-center mb-2">
          Checkout
        </h1> */}

        <div className='w-full flex flex-col justify-center lg:justify-normal md:flex-row lg:flex-row gap-4 mr-4 ml-4 md:mr-3 md:ml-3 lg:mr-25 lg:ml-25'>
          <div>
            <ItemsInCheckOut/>
          </div>
          <div className='w-full lg:w-[420px] flex-'>
            <UserDetailForCheckOut/>
            <PayForCheckOut/>
          </div>
        </div>

      </div>
    <Footer/>
    </>
  )
}

export default CheckOut