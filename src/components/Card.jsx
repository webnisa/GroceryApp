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
      className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm cursor-pointer relative h-auto"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-contain"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-medium">
          {product.tag}
        </span>
       <WhishList product={product}/>
      </div>

      <h2 className="mt-3 font-semibold text-gray-800 h-auto">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500">{product.quantity}</p>

      <div className="flex items-center gap-1 mt-2">
        <FaStar className="text-yellow-400 text-sm" />

        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-lg font-bold text-emerald-700">
          ₹{product.price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          ₹{product.oldPrice}
        </span>
      </div>

      <div className="flex mt-1 justify-between items-center">
        <p className="text-red-500 text-sm font-medium ">
          {product.discount} OFF
        </p>

        <AddToCart product={product}/>
      </div>
    </div>
  );
};

export default Card;
