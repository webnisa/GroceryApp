import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import AddToCart from "./AddToCart";
import WhishList from "./WishList";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Card = ({product}) => {
  const { cart, setCart, wishlist, setWishlist} = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 p-1.5 lg:p-4 shadow-sm cursor-pointer relative h-auto"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 md:h-34 lg:h-44 w-full object-contain"
        />
        <span className="absolute top-1 left-0 md:top-2 md:left-2 lg:top-2 lg:left-2 bg-red-500 text-white text-xs px-1 py-1 md:px-2 md:py-1 lg:px-2 lg:py-1 rounded-lg font-medium">
          {product.tag}
        </span>
       <WhishList product={product}/>
      </div>

      <h2 className="mt-1 lg:mt-3 font-semibold text-gray-800 h-auto text-xs lg:text-xl">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500">{product.quantity}</p>

      <div className="flex items-center gap-1 mt-0.5 lg:mt-2">
        <FaStar className="text-yellow-400 text-sm" />

        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex items-center gap-2 mt-1 lg:mt-3">
        <span className="text-sm lg:text-lg font-bold text-emerald-700">
          ₹{product.price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          ₹{product.oldPrice}
        </span>
      </div>

      <div className="flex mt-1 justify-between items-center">
        <p className="text-red-500 text-xs">
          {product.discount} OFF
        </p>

        <AddToCart product={product}/>
      </div>
    </div>
  );
};

export default Card;
