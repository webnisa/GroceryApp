import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {

    const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="bg-white p-4 lg:p-10 rounded-3xl shadow-xl text-center w-80 md:w-110 lg:w-[500px]">

          <div className="text-7xl">
            🎉
          </div>

          <h1 className="text-4xl font-bold text-emerald-700 mt-5">

            Order Placed

          </h1>

          <p className="text-gray-600 mt-4">

            Thank you for shopping with us.

          </p>

          <p className="text-gray-600">

            Your order will be delivered in

          </p>

          <p className="text-2xl font-bold text-orange-600 mt-2">

            25 - 30 Minutes

          </p>

          <button

          onClick={()=>navigate("/")}

          className="mt-8 bg-emerald-700 hover:bg-emerald-800 text-white text-xl px-8 py-3 rounded-xl"

          >

            Continue Shopping

          </button>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default OrderSuccess;