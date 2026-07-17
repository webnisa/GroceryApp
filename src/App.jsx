import React from "react";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "./context/AppContext";
import { products } from "./data/products";

import ProductDetail from "./pages/ProductDetail";
import SearchingPage from "./pages/SearchingPage";
import Home from "./pages/home";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";
import PlaceOrder from "./pages/PlaceOrder";
import OrderSuccess from "./pages/OrderSuccess ";
import Products from "./pages/Products";


import Loader from "./components/Loader";
import UserOrder from "./components/UserOrder";


const App = () => {
   const { loading, setLoading } = useContext(AppContext);
   
  return (
    <>
    {loading && <Loader />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="/search" element={<SearchingPage />} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/placeOrder" element={<PlaceOrder />} />
      <Route path="/orderSuccess" element={<OrderSuccess />} />
      <Route path="/myOrder" element={<UserOrder/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  );
};

export default App;