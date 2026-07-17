import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Biling from "./Biling";
import { useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const BilingCart = () => {
  const { cartTotal, cart, showBill, setshowBill } = useContext(AppContext);
  const billRef = useRef(null);

  useEffect(() => {
    const clickedOutsideOfBill = (e) => {
      if (billRef.current && !billRef.current.contains(e.target)) {
        setshowBill(false);
      }
    };

    document.addEventListener("mousedown", clickedOutsideOfBill);

   return () => {
  document.removeEventListener(
    "mousedown",
    clickedOutsideOfBill
  );
};
  }, [setshowBill]);

  const generateBill = () => {
    if (cart.length > 0) {
      setshowBill(!showBill);
    }
  };

  return (
    <>
      <div ref={billRef} className="relative">
        <div
          className="justify-center items-center flex flex-col cursor-pointer relative text-emerald-900 text-xl font-bold"
          onClick={generateBill}
        >
          <FaShoppingCart />
          {cartTotal > 0 && (
            <span className="absolute -top-2 -right-1 w-4.5 h-4.5 rounded-3xl text-xs flex justify-center items-center p-1 bg-lime-200">
              {cartTotal}
            </span>
          )}
          <p>Cart</p>
        </div>
        {showBill && (
          <div className="absolute top-0 right-14 z-100">
            <Biling/>
          </div>
        )}
      </div>
    </>
  );
};

export default BilingCart;
