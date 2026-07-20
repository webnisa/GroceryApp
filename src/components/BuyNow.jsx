import React from "react";
import AddToCart from "../components/AddToCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const BuyNow = ({ product }) => {
  const { isBuyNow, setIsBuyNow } = useContext(AppContext);
  const navigate = useNavigate();

  const handelClick = () => {
    setIsBuyNow({ ...product, quantity: 1 });
    navigate("/CheckOut");
  };

  const quantityIncrees = () => {
    setIsBuyNow({ ...product, quantity: isBuyNow.quantity + 1 });
  };

  const quantityDecrees = () => {
    if (isBuyNow.quantity > 1) {
      setIsBuyNow({
        ...isBuyNow,
        quantity: isBuyNow.quantity - 1,
      });
    } else {
      setIsBuyNow(null);
    }
  };

  return (
    <>
      {isBuyNow && isBuyNow.id === product.id ? (
        <div
          className="flex gap-2 w-auto justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="bg-orange-500 text-white h-auto w-5 md:w-6 lg:w-7 rounded-xl p-1 text-xs md:text-xl lg:text-xl"
            onClick={quantityDecrees}
          >
            -
          </button>
          <span className="text-emerald-900 text-xs lg:text-xl font-bold">
            {isBuyNow.quantity}
          </span>
          <button
            className="bg-orange-500 text-white h-auto w-5 md:w-6 lg:w-7 rounded-xl p-1 text-xs md:text-xl lg:text-xl"
            onClick={quantityIncrees}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-xl font-semibold duration-300"
          onClick={() => {
            handelClick();
          }}
        >
          Buy Now
        </button>
      )}
    </>
  );
};

export default BuyNow;
