import React, { useContext } from "react";
import Card from "./Card";
import { products } from "../data/products";
import { AppContext } from "../context/AppContext";

const ProductCard = () => {
  const { category, cart, setCart, wishlist, setWishlist, search } =
    useContext(AppContext);

  const filterProducts =
    category === "All"
      ? products
      : products.filter((items) => items.category === category);

  return (
    <div className="w-full h-auto grid grid-cols-6 gap-3 p-8 pt-3">
      {filterProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCard;
