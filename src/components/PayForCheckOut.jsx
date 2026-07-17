import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import visa from "../assets/images/visa.png";
import payTM from "../assets/images/payTM.png";
import paypal from "../assets/images/paypal.png";
import masterCard from "../assets/images/masterCard.png";
import googlePay from "../assets/images/googlePAy.png";
import phonePay from "../assets/images/phonePay.png";

const PayForCheckOut = () => {
  const { paymentType, setPaymentType } = useContext(AppContext);

  return (
    <div className="gap-3 mt-4">
      <div className="flex flex-wrap w-120 bg-white shadow-lg border border-gray-200  text-xl text-green-800 p-3 font-bold rounded-2xl justify-center items-center h-auto">
        <h1 className="text-3xl m-2 mt-0 w-full text-center">
          {" "}
          Choose Payment Method
        </h1>
        <br></br>
        <img
          src={googlePay}
          onClick={() => setPaymentType("googlePay")}
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "googlePay"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
        />
        <img
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "phonePay"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={phonePay}
          onClick={() => {
            setPaymentType("phonePay");
          }}
        ></img>
        <img
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "payTM"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={payTM}
          onClick={() => {
            setPaymentType("payTM");
          }}
        ></img>
        <img
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "masterCard"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={masterCard}
          onClick={() => {
            setPaymentType("masterCard");
          }}
        ></img>
        <img
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "payPal"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={paypal}
          onClick={() => {
            setPaymentType("payPal");
          }}
        ></img>
        <img
          className={`w-25 h-20 rounded-2xl object-contain shadow-lg m-3 mb-2 cursor-pointer transition-all duration-300
    ${
      paymentType === "visa"
        ? "border-4 border-emerald-600 scale-105"
        : "border border-gray-200 hover:border-emerald-400"
    }`}
          src={visa}
          onClick={() => {
            setPaymentType("visa");
          }}
        ></img>
        <div
          className={`bg-orange-600 flex text-amber-50 text-2xl text-center p-2 rounded-xl w-25 h-20 justify-center items-center m-3 mr-10 ml-10 border-amber-950 ${paymentType === "cod"? "border-4 border-emerald-600 scale-105": ""}`}
          onClick={() => {
            setPaymentType("cod");
          }}
        >
          COD
        </div>
      </div>
    </div>
  );
};

export default PayForCheckOut;
