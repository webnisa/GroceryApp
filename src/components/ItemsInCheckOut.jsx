import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MdDelete } from "react-icons/md";
import { ImCross } from "react-icons/im";
import AddToCart from "./AddToCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ItemsInCheckOut = () => {
  const { cart, cartTotal, setCart, paymentType } = useContext(AppContext);
  const navigate = useNavigate();

  const subTotal = cart.reduce((total, items) => {
    return total + items.price * items.quantity;
  }, 0);

  const GST = subTotal * 0.05;
  const deliveryCharge = subTotal > 0 ? 30 : 0;
  const total = subTotal + GST + deliveryCharge;

  const deleteAllProduct = () => {
    setCart([]);
  };

  const deleteProduct = (items) => {
    const filterCart = cart.filter((product) => product.id !== items.id);

    setCart(filterCart);
  };

  const handelPlaceOrder = () => {
    if (paymentType === "") {
      toast.error("Please Choose Payment Mode");
    } else {
      navigate("/placeOrder");
    }
  };

  return (
    <>
      <div className="w-85 md:w-130 lg:w-170 bg-white rounded-2xl shadow-lg border border-gray-200 p-2 lg:p-5">
        <div className="flex justify-between items-center border-b pb-2 lg:pb-4 mb-2 lg:mb-5">
          <h2 className="text-xl lg:text-3xl font-bold text-emerald-800">
            Items
            <span className="text-lg text-gray-500 ml-2">
              ({cartTotal} items)
            </span>
          </h2>

          <button
            className="flex items-center gap-0.5 lg:gap-2 text-red-600 hover:text-red-700 font-semibold"
            onClick={deleteAllProduct}
          >
            <MdDelete className="text-xl lg:text-2xl" />
            Remove All
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {cart.map((items) => (
            <div
              key={items.id}
              className="flex justify-between items-center p-2 lg:p-3 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              <div className="flex gap-2 lg:gap-5">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-18 h-18 lg:w-28 lg:h-28 rounded-xl object-cover"
                />

                <div className="flex flex-col justify-center">
                  <h3 className="text-sm lg:text-xl font-bold text-emerald-800">
                    {items.name}
                  </h3>

                  <p className="text-gray-600 mt-1">₹ {items.price}</p>

                  <p className="text-green-600 font-semibold mt-1">
                    {items.discount}
                  </p>

                  <div className="">
                    <AddToCart product={items} />
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end justify-between h-28">
                <button className="text-red-500 hover:text-red-700 text-sm">
                  <ImCross
                    onClick={() => {
                      deleteProduct(items);
                    }}
                  />
                </button>

                <h2 className="text-xl lg:text-2xl font-bold text-emerald-700">
                  ₹ {items.price * items.quantity}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-85 md:130 lg:w-170 mt-2 bg-white shadow-lg border border-gray-200 rounded-2xl p-2 lg:p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-800 mb-1.5 lg:mb-3">
          Order Summary
        </h1>

        <div className="space-y-1 lg:space-y-2">
          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">Subtotal</p>
            <span className="font-semibold">₹ {subTotal.toFixed(2)}</span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">GST (5%)</p>
            <span className="font-semibold">₹ {GST.toFixed(2)}</span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-sm lg:text-lg">
            <p className="text-gray-700">Delivery Charge</p>
            <span className="font-semibold">
              {deliveryCharge === 0 ? "Free" : `₹ ${deliveryCharge}`}
            </span>
          </div>

          <hr className="border-gray-300" />

          <div className="flex justify-between items-center text-xl lg:text-2xl font-bold text-emerald-800">
            <p>Total</p>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        className="hidden lg:block w-170 mt-2 lg:mt-4 bg-emerald-800 hover:bg-emerald-900 text-white py-1.5 lg:py-4 rounded-xl text-xl lg:text-2xl font-bold shadow-lg"
        onClick={() => {
          if (cartTotal > 0) {
            handelPlaceOrder();
          }
          else{
            toast.error("Cart is Empty");
          }
        }}
      >
        Place Order
      </button>
    </>
  );
};

export default ItemsInCheckOut;
