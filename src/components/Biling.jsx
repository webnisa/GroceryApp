import React, { useContext } from "react";

import logo from "../assets/images/logo.jpg";

import { AppContext } from "../context/AppContext";

import AddToCart from "./AddToCart";

import { useNavigate } from "react-router-dom";

import { useUser } from "@clerk/clerk-react";

const Biling = ({billRef}) => {
  const { cartTotal, cart, showBill, setshowBill , setIsShow, isBuyNow, setIsBuyNow} = useContext(AppContext);

  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  if(cart.length === 0){
    return;
  }
  const subTotal = cart.reduce((total, items) => {
    return total + items.quantity * items.price;
  }, 0);

  let GST = subTotal * 0.05;

  let deliveryCharge = subTotal > 0 ? 30 : 0;

  let totalPrice = subTotal + GST + deliveryCharge;

  return (
    <div className="flex w-75 md:w-90 lg:w-115 flex-col bg-white text-emerald-800 lg:border-4 border-2 border-b-emerald-800 relative z-999" ref={billRef}
  onClick={(e) => e.stopPropagation()}>
      
      <div className="flex justify-center items-center gap-0.5 lg:gap-2 bg-white">
        <p className="lg:text-xl text-xs font-bold">Grocery Bill</p>
        <img src={logo} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full object-cover"></img>
      </div>

      <table className="w-full border-collapse text-center">
  <thead className="bg-emerald-800 text-white ">
    <tr>
      <th className="px-2 py-1 lg:px-5 lg:py-3">Product</th>
      <th className="px-2 py-1 lg:px-5 lg:py-3">Price</th>
      <th className="px-2 py-1 lg:px-5 lg:py-3">Quantity</th>
      <th className="px-2 py-1 lg:px-5 lg:py-3">Total</th>
    </tr>
  </thead>

  <tbody>
    {cart.map((items) => (
      <tr
        key={items.id}
        className="border-b hover:bg-emerald-50 transition"
      >
        <td className="py-0.5 lg:py-3">
          <div className="flex items-center gap-1 lg:gap-3 pl-2">
            <img
              src={items.image}
              className="w-7 h-12 lg:w-12 lg:h-12 rounded-lg object-cover"
            />

            <p className="text-xs lg:text-xl font-semibold">{items.name}</p>
          </div>
        </td>

        <td className="font-semibold lg:text-xl text-xs">
          ₹{items.price}
        </td>

        <td>
          <div className="flex justify-center">
            <AddToCart product={items} />
          </div>
        </td>

        <td className="font-bold lg:text-xl text-xs">
          ₹{items.quantity * items.price}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      <div className="bg-gray-100 rounded-xl m-2 lg:m-3 p-1.5 lg:p-4 shadow">

    <div className="flex justify-between text-sm lg:text-lg mb-0.5 lg:mb-2">
        <p>Subtotal</p>
        <span>₹{subTotal.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-sm lg:text-lg mb-0.5 lg:mb-2">
        <p>GST (5%)</p>
        <span>₹{GST.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-sm lg:text-lg mb-0.5 lg:mb-2">
        <p>Delivery</p>
        <span>₹{deliveryCharge}</span>
    </div>

    <hr className="my-2"/>

    <div className="flex justify-between text-sm lg:text-2xl font-bold text-emerald-700 mt-1">
        <p>Total</p>
        <span>₹{totalPrice.toFixed(2)}</span>
    </div>

</div>
      <button className="bg-emerald-800 text-xl text-white w-auto m-1 ml-2 mr-2 lg:m-2 rounded-xl p-1 lg:p-2 flex justify-center items-center cursor-pointer" onClick={()=>{
        if(isBuyNow){
            setIsBuyNow(null);
          }

        if(isSignedIn){
          
          navigate("/CheckOut");
          setIsShow(false);
          setshowBill(false);
        }
        else{
          navigate("/login");
        }
      }}>{isSignedIn? "Proceed to Checkout...": "Login To Proceed..."}</button>
    </div>
  );
};

export default Biling;
 