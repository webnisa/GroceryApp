import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import visa from "../assets/images/visa.png";
import payTM from "../assets/images/payTM.png";
import paypal from "../assets/images/paypal.png";
import masterCard from "../assets/images/masterCard.png";
import googlePay from "../assets/images/googlePAy.png";
import phonePay from "../assets/images/phonePay.png";

const PayForCheckOut = () => {
  const {cart, cartTotal, setCart, paymentType, setPaymentType } = useContext(AppContext);

  const navigate = useNavigate();

  const subTotal = cart.reduce((total, items) => {
    return total + items.price * items.quantity;
  }, 0);

  const GST = subTotal * 0.05;
  const deliveryCharge = subTotal > 0 ? 30 : 0;
  const total = subTotal + GST + deliveryCharge;

  const deleteAllProduct = () => {
    setCart([]);
  };

  const deleteProduct = (items) => {
    const filterCart = cart.filter((product) => product.id !== items.id);

    setCart(filterCart);
  };

  const handelPlaceOrder = () => {
    if (paymentType === "") {
      toast.error("Please Choose Payment Mode");
    } else {
      navigate("/placeOrder");
    }
  };


  return (
    <div className="gap-1 lg:gap-3 mt-2 lg:mt-4">
      <div className="flex flex-wrap w-full md:w-85 lg:w-120 bg-white shadow-lg border border-gray-200 text-xl text-green-800 p-1 lg:p-3 font-bold rounded-2xl justify-center items-center h-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl m-2 mt-0 w-full text-center">
          {" "}
          Choose Payment Method
        </h1>
        <br></br>
        <img
          src={googlePay}
          onClick={() => setPaymentType("googlePay")}
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "googlePay"
        ? "lg:border-4  border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
        />
        <img
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "phonePay"
        ? "lg:border-4 border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={phonePay}
          onClick={() => {
            setPaymentType("phonePay");
          }}
        ></img>
        <img
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "payTM"
        ? "lg:border-4 border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={payTM}
          onClick={() => {
            setPaymentType("payTM");
          }}
        ></img>
        <img
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "masterCard"
        ? "lg:border-4 border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={masterCard}
          onClick={() => {
            setPaymentType("masterCard");
          }}
        ></img>
        <img
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "payPal"
        ? "lg:border-4 border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={paypal}
          onClick={() => {
            setPaymentType("payPal");
          }}
        ></img>
        <img
          className={`w-20 h-17 lg:w-25 lg:h-20 rounded-2xl object-contain shadow-lg m-1 mb-1 lg:m-3 lg:mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "visa"
        ? "lg:border-4 border-3 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={visa}
          onClick={() => {
            setPaymentType("visa");
          }}
        ></img>
        <div
          className={`bg-orange-600 flex text-amber-50 text-2xl text-center p-2 rounded-xl w-20 h-17 lg:w-25 lg:h-20 justify-center items-center m-3 mr-10 ml-10 border-amber-950 ${paymentType === "cod" ? "border-3 lg:border-4 border-emerald-600 scale-105" : ""}`}
          onClick={() => {
            setPaymentType("cod");
          }}
        >
          COD
        </div>
      </div>

      <div className="w-full md:130 lg:w-200 mt-2 md:hidden lg:hidden bg-white shadow-lg border border-gray-200 rounded-2xl p-2 lg:p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-800 mb-1.5 lg:mb-3">
          Order Summary
        </h1>

        <div className="space-y-1 lg:space-y-2">
          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">Subtotal</p>
            <span className="font-semibold">₹ {subTotal.toFixed(2)}</span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">GST (5%)</p>
            <span className="font-semibold">₹ {GST.toFixed(2)}</span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">Delivery Charge</p>
            <span className="font-semibold">
              {deliveryCharge === 0 ? "Free" : `₹ ${deliveryCharge}`}
            </span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-xl lg:text-2xl font-bold text-emerald-800">
            <p>Total</p>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        className="lg:hidden md:hidden w-full mt-2 lg:mt-4 bg-emerald-800 hover:bg-emerald-900 text-white py-1.5 lg:py-4 rounded-xl text-xl lg:text-2xl font-bold shadow-lg"
        onClick={handelPlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default PayForCheckOut;
