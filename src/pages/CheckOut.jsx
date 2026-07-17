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

      <div className="w-auto mr-20 ml-20 p-5">
        {/* <h1 className="text-4xl font-bold text-emerald-800 text-center mb-2">
          Checkout
        </h1> */}

        <div className='w-full ml-5 mr-5 flex gap-2'>
          <div>
            <ItemsInCheckOut/>
          </div>
          <div className='gap-3'>
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