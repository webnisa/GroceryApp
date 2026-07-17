import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "../context/AppContext";

const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(AppContext);

  const cartItems = cart.find((items) => items.id === product.id);

  const addItemsInCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increaseQNT = () => {
    setCart(
      cart.map((items) =>
        items.id === product.id
          ? { ...items, quantity: items.quantity + 1 }
          : items,
      ),
    );
  };

  const decreaseQNT = () => {
    setCart(
      cart
        .map((items) =>
          items.id === product.id
            ? { ...items, quantity: items.quantity - 1 }
            : items,
        )
        .filter((items) => {
          return items.quantity > 0;
        }),
    );
  };

  return (
    <>
      {cartItems ? (
        <div
          className="flex gap-2 w-auto justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="bg-green-800 text-white h-auto w-7 rounded-xl p-1 text-xl"
            onClick={decreaseQNT}
          >
            -
          </button>
          <span className="text-emerald-900 text-xl font-bold">
            {cartItems.quantity}
          </span>
          <button
            className="bg-green-800 text-white h-auto w-7 rounded-xl p-1 text-xl"
            onClick={increaseQNT}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-green-800 text-white h-auto w-auto rounded-xl p-2"
          onClick={(e) => {
            addItemsInCart();
            e.stopPropagation();
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
