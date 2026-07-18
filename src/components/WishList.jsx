import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const WishList = ({product}) => {
  const { wishlist, setWishlist} = useContext(AppContext);
  
  let isWishlisted = wishlist.find((items) => items.id === product.id);

  const clickedToLike = (e) => {
    e.stopPropagation();

    
    if (isWishlisted ) {
      setWishlist(wishlist.filter((items) => items.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <>
      <button
        className={`absolute top-0 right-0 md:top-2 md:right-2 lg:top-2 lg:right-2 bg-white rounded-full p-2 shadow hover:text-red-500 ${
          isWishlisted ? "text-red-500" : ""
        }`}
        onClick={clickedToLike}
      >
        <FaHeart size={15}/>
      </button>
    </>
  );
};

export default WishList;
