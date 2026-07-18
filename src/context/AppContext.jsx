import React from "react";
import { useEffect, useState, createContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { user, isLoaded } = useUser();
  const userId = user?.id;

  const [isShow, setIsShow] = useState(false);
  const [category, setCategory] = useState("All");
  const [showBill, setshowBill] = useState(false);
  const [search, setSearch] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [showDetail, setShowDetail] = useState(null);
  const [order, setOrder] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!isLoaded || !userId) return;

    const savedOrder =
      JSON.parse(localStorage.getItem(`order_${userId}`)) || [];

    const savedWishlist =
      JSON.parse(localStorage.getItem(`wishlist_${userId}`)) || [];

    const savedItems = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];

    setOrder(savedOrder);
    setWishlist(savedWishlist);
    setCart(savedItems);
  }, [userId, isLoaded]);


  useEffect(() => {
    if (!isLoaded || !userId) return;
    localStorage.setItem(`order_${userId}`, JSON.stringify(order));
  }, [order, userId, isLoaded]);


  useEffect(() => {
    if (!isLoaded || !userId) return;
    localStorage.setItem(`wishlist_${userId}`, JSON.stringify(wishlist));
  }, [wishlist, userId, isLoaded]);


  useEffect(() => {
    if (!isLoaded || !userId) return;
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
  }, [cart, userId, isLoaded]);


  const cartTotal = cart.reduce((total, items) => {
    return total + items.quantity;
  }, 0);

  useEffect(()=>{
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return ()=>{
      clearTimeout(timer);
    }

  }, [location.pathname])

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        showBill,
        setshowBill,
        search,
        setSearch,
        wishlist,
        setWishlist,
        cart,
        setCart,
        cartTotal,
        paymentType,
        setPaymentType,
        order,
        setOrder,
        showDetail,
        setShowDetail,
        loading,
        setLoading,
        isShow,
        setIsShow
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
