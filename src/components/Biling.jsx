import React, { useContext } from "react";

import logo from "../assets/images/logo.jpg";

import { AppContext } from "../context/AppContext";

import AddToCart from "./AddToCart";

import { useNavigate } from "react-router-dom";

import { useUser } from "@clerk/clerk-react";

const Biling = () => {
  const { cartTotal, cart, showBill, setshowBill } = useContext(AppContext);

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
    <div className="flex w-115 justify-center h-auto flex-col bg-white text-emerald-800 absolute top-0 right-5 mt-5 border-4 border-b-emerald-800">
      <div className="flex justify-center items-center gap-2 bg-white">
        <p className="text-xl font-bold">Grocery Bill</p>
        <img src={logo} className="w-10 h-10 rounded-4xl object-cover"></img>
      </div>

      <table className="w-full border-collapse text-center">
  <thead className="bg-emerald-800 text-white ">
    <tr>
      <th className="px-5 py-3">Product</th>
      <th className="px-5 py-3">Price</th>
      <th className="px-5 py-3">Quantity</th>
      <th className="px-5 py-3">Total</th>
    </tr>
  </thead>

  <tbody>
    {cart.map((items) => (
      <tr
        key={items.id}
        className="border-b hover:bg-emerald-50 transition"
      >
        <td className="py-3">
          <div className="flex items-center gap-3 pl-2">
            <img
              src={items.image}
              className="w-12 h-12 rounded-lg object-cover"
            />

            <p className="font-semibold">{items.name}</p>
          </div>
        </td>

        <td className="font-semibold">
          ₹{items.price}
        </td>

        <td>
          <div className="flex justify-center">
            <AddToCart product={items} />
          </div>
        </td>

        <td className="font-bold text-emerald-700">
          ₹{items.quantity * items.price}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      <div className="bg-gray-100 rounded-xl m-3 p-4 shadow">

    <div className="flex justify-between text-lg mb-2">
        <p>Subtotal</p>
        <span>₹{subTotal.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-lg mb-2">
        <p>GST (5%)</p>
        <span>₹{GST.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-lg mb-2">
        <p>Delivery</p>
        <span>₹{deliveryCharge}</span>
    </div>

    <hr className="my-2"/>

    <div className="flex justify-between text-2xl font-bold text-emerald-700">
        <p>Total</p>
        <span>₹{totalPrice.toFixed(2)}</span>
    </div>

</div>
      <button className="bg-emerald-800 text-xl text-white w-auto m-2 rounded-xl p-2 flex justify-center items-center cursor-pointer" onClick={()=>{
        if(isSignedIn){
          navigate("/CheckOut");
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
 