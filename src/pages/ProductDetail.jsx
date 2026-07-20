import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { FaStar } from "react-icons/fa";
import AddToCart from "../components/AddToCart";
import { AppContext } from "../context/AppContext";
import BuyNow from "../components/BuyNow";

const ProductDetail = () => {
  const { cart, setCart, cartTotal, showBill, setshowBill, wishlist, setWishlist, isBuyNow, setIsBuyNow } = useContext(AppContext)
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  return (
    <>
      {!product ? (
        <h1 className="text-center text-4xl font-bold mt-3 lg:mt-20 text-red-500">
          Product Not Found
        </h1>
      ) : (
        <>
          <Header/>

          <div className="max-w-7xl mx-auto my-1 lg:my-10 bg-white rounded-3xl shadow-xl pl-6 pr-6 lg:p-8">

            <div className="flex gap-4 lg:gap-10 flex-col lg:flex-row">


              <div className="w-77 lg:w-1/2 flex justify-center items-center bg-gray-50 rounded-3xl p-2 border">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-60 lg:w-120 lg:h-120 hover:scale-105 duration-300"
                />

              </div>

              {/* Right Side */}

              <div className="lg:w-1/2 flex flex-col gap-2.5 lg:gap-5">

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-emerald-800">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2">

                  <FaStar className="text-yellow-500 text-xl" />

                  <span className="text-xl font-semibold">
                    {product.rating}
                  </span>

                </div>

                <p className="text-2xl">
                  <span className="font-bold">
                    Quantity :
                  </span>{" "}
                  {product.quantity}
                </p>

                <div className="flex items-center gap-3 lg:gap-4">

                  <span className="text-4xl font-bold text-emerald-700">
                    ₹{product.price}
                  </span>

                  <span className="line-through text-2xl text-gray-400">
                    ₹{product.oldPrice}
                  </span>

                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg">
                    {product.discount}
                  </span>

                </div>

                <p className="text-2xl">
                  <span className="font-bold">
                    Category :
                  </span>{" "}
                  {product.category}
                </p>

                <div className="bg-gray-100 rounded-xl p-2.5 lg:p-5">

                  <h2 className="text-2xl font-bold mb-0.5 lg:mb-2">
                    Description
                  </h2>

                  <p className="text-gray-700 leading-6 lg:leading-8 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, beatae. Eaque minima accusantium dignissimos
                    labore adipisci doloremque maiores magni eligendi.
                  </p>

                </div>

                <div className="flex gap-5 mt-2 lg:mt-4 justify-evenly mb-4">

                 <AddToCart product={product}/>

                  <BuyNow product={product}/>

                </div>

              </div>

            </div>

          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetail;