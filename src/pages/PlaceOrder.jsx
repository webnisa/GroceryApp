import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {

  const { cart, paymentType, setCart, order, setOrder, isBuyNow, setIsBuyNow} = useContext(AppContext);
  const navigate = useNavigate();
   const categoryOfBuy = isBuyNow? [isBuyNow] : cart;

  const subTotal = categoryOfBuy.reduce((total, item) => {
    return total + item.price * item.quantity;
  },0);

  const GST = subTotal * 0.05;
  const deliveryCharge = 30;
  const total = subTotal + GST + deliveryCharge;

  const confirmOrder = ()=>{
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
      paymentType : paymentType,
      status: "Order Confirm",
      num : order.length + 1,
    }

    setOrder([...order, newOrder]);

    setCart([])
    setIsBuyNow(null);
      toast.info("Order Placed Successfully 🎉");
      navigate("/orderSuccess");

  }

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto flex flex-col lg:block justify-center items-center lg:mt-10 lg:mb-10">

        <h1 className="text-4xl font-bold text-emerald-800 mb-8">
          Confirm Order
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-3 lg;p-8">

          <h2 className="text-2xl font-bold mb-5">
            Order Details
          </h2>

          {
            categoryOfBuy.map(item=>(
              <div
              key={item.id}
              className="flex justify-between border-b py-3"
              >

                  <p>
                    {item.name}
                    ×
                    {item.quantity}
                  </p>

                  <p>
                    ₹{item.price*item.quantity}
                  </p>

              </div>
            ))
          }

          <div className="mt-8 space-y-2">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{GST.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹30</span>
            </div>

            <hr/>

            <div className="flex justify-between text-2xl font-bold text-emerald-700">

              <span>Total</span>

              <span>
                ₹{total.toFixed(2)}
              </span>

            </div>

          </div>

          <div className="mt-8">

            <h2 className="font-bold text-xl mb-2">
              Payment Method
            </h2>

            <p className="text-lg capitalize">
              {paymentType}
            </p>

          </div>

          <button

          onClick={confirmOrder}

          className="mt-8 w-full bg-emerald-700 hover:bg-emerald-800 text-white text-2xl rounded-xl py-4"

          >

            Confirm Order

          </button>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default PlaceOrder;