import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header from "./Header";
import Footer from "./Footer";

const UserOrder = () => {
  const { order, showDetail, setShowDetail } = useContext(AppContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-emerald-700 mb-2 md:mb-4 lg:mb-6">
            My Orders
          </h1>

          {order.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md py-5 lg:py-10 text-center">
              <p className="text-2xl font-medium text-gray-500">
                No Order Placed Yet
              </p>
            </div>
          ) : (
            <div className="space-y-4 lg:space-y-8">
              {order.map((items) => (
                <div key={items.id}>
                
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-2 lg:p-5">
                    
                    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div>
                        <h2 className="text-2xl font-bold text-emerald-700">
                          Order #{items.num}
                        </h2>

                        <p className="text-gray-500 mt-1">
                          {items.date}
                        </p>
                      </div>

                      <span className="px-2 py-1 text-xs lg:text-sm lg:px-4 lg:py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                        {items.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-1 lg:gap-5 mt-2  lg:mt-6 text-lg relative">
                      <p>
                        <span className="font-semibold text-gray-700">
                          Order ID:
                        </span>{" "}
                        <span className="text-gray-500 break-all">
                          {items.id}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold text-gray-700">
                          Payment:
                        </span>{" "}
                        <span className="text-gray-500 capitalize">
                          {items.paymentType}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold text-gray-700">
                          Total:
                        </span>{" "}
                        <span className="text-emerald-700 font-bold text-sm lg:text-xl">
                          ₹{items.total}
                        </span>
                      </p>

                      <div className="md:col-span-2 flex justify-end relative">
                        <button
                          className="px-2 py-1 text-sm lg:px-6 lg:py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-md absolute bottom-1 lg:relative"
                          onClick={() => {
                            if (showDetail === items.id) {
                              setShowDetail(null);
                            } else {
                              setShowDetail(items.id);
                            }
                          }}
                        >
                          {showDetail === items.id
                            ? "Hide Details"
                            : "Show Details"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Show Details */}
                  {showDetail === items.id && (
                    <div className="bg-white rounded-2xl shadow-md mt-1 lg:mt-3 p-2 lg:p-5 border border-gray-200">
                      <h3 className="text-xl lg:text-2xl font-bold text-emerald-700 mb-1 lg:mb-4">
                        Ordered Products
                      </h3>

                      <div className="space-y-2 lg:space-y-4">
                        {items.items.map((product) => (
                          <div
                            key={product.id}
                            className="flex justify-between items-center border rounded-xl p-1.5 lg:p-4 hover:bg-gray-50"
                          >
                            <div className="flex items-center gap-1 lg:gap-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-15 h-15 lg:w-20 lg:h-20 rounded-lg object-cover"
                              />

                              <div>
                                <h4 className="text-xs lg:text-lg font-semibold">
                                  {product.name}
                                </h4>

                                <p className="text-xs lg:text-lg text-gray-500">
                                  ₹{product.price}
                                </p>

                                <p className="text-gray-500 text-xs lg:text-lg">
                                  Quantity : {product.quantity}
                                </p>
                              </div>
                            </div>

                            <h3 className="text=sm lg:text-xl font-bold text-emerald-700">
                              ₹{product.price * product.quantity}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserOrder;