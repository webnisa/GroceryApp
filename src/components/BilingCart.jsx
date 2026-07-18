import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Biling from "./Biling";
import { useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const BilingCart = () => {
  const { cartTotal, cart, showBill, setshowBill, isShow } =
    useContext(AppContext);
  const billRef = useRef(null);

  useEffect(() => {
    const clickedOutsideOfBill = (e) => {
      if (billRef.current && !billRef.current.contains(e.target)) {
        setshowBill(false);
      }
    };

    document.addEventListener("click", clickedOutsideOfBill);

    return () => {
      document.removeEventListener("click", clickedOutsideOfBill);
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
          className="mt-2 lg:justify-center lg:items-center flex lg:flex-col cursor-pointer relative text-emerald-900 font-bold gap-1.5 lg:gap-0"
          onClick={(e) => {
            e.stopPropagation();
            generateBill();
          }}
        >
          <FaShoppingCart className="text-xl md:text-2xl" />
          {cartTotal > 0 && (
            <span className="absolute h-2 w-2 -top-2 right-18.5 p-2 lg:-top-2 lg:-right-1  lg:w-4.5 lg:h-4.5 rounded-3xl text-xs flex justify-center items-center lg:p-1 bg-lime-200">
              {cartTotal}
            </span>
          )}
          <p>Cart</p>
        </div>
        {showBill && (
          <div className="absolute top-12 right-0 lg:top-0 lg:right-14 z-9999">
            <Biling billRef={billRef} />
          </div>
        )}
      </div>
    </>
  );
};

export default BilingCart;
