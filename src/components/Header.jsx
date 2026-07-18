import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.jpg";

import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FcPackage } from "react-icons/fc";

import SeachBar from "../components/SearchBar";
import Location from "../components/Location";
import BilingCart from "../components/BilingCart";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const {
    cartTotal,
    cart,
    showBill,
    setshowBill,
    search,
    setSearch,
    isShow,
    setIsShow,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const { user } = useUser();

  const showRef = useRef();

  useEffect(() => {
    const clickedOutsideBox = (e) => {
      if (showBill) return;

      if (showRef.current && !showRef.current.contains(e.target)) {
        if (!showBill) {
          setIsShow(false);
        }
      }
    };

    document.addEventListener("click", clickedOutsideBox);
    return () => {
      document.removeEventListener("click", clickedOutsideBox);
    };
  }, [setIsShow, showBill]);

  return (
    <div className="p-2 md:p-4 w-full">
      <nav className="flex flex-wrap md:flex-nowrap justify-between w-full p-2 rounded-2xl border-2 border-gray-200 relative">
        <div
          className="flex justify-center items-center h-10 w-auto gap-1"
          onClick={() => {
            navigate("/");
            setSearch("");
          }}
        >
          <img
            src={logo}
            className="h-6 w-6 md:h-10 md:w-10 rounded-full object-cover cursor-pointer"
          ></img>
          <p className="text-emerald-800 text-sm md:text-xl lg:text-2xl font-bold cursor-pointer">
            Grocery
          </p>
        </div>

        <SeachBar />

        <Location />

        <div className="hidden lg:flex items-center gap-2 md:gap-6 font-bold">
          <SignedOut>
            {/* Login */}
            <div
              onClick={() => navigate("/login")}
              className="flex flex-col items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300 font-bold"
            >
              <FaUserCircle className="text-xl md:text-2xl lg:text-2xl" />
              <p className="text-sm font-bold">Login</p>
            </div>

            {/* Signup */}
            <div
              onClick={() => navigate("/signup")}
              className="flex flex-col items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300 font-bold"
            >
              <FaSignInAlt className="text-xl md:text-2xl lg:text-2xl" />
              <p className="text-sm font-bold">Sign Up</p>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Greeting */}
              <div className="text-center lg:text-right">
                <p className="text-xs text-gray-500">Welcome</p>
                <p className="font-bold text-emerald-800 ">{user?.firstName}</p>
              </div>

              {/* Clerk Avatar */}
              <UserButton afterSignOutUrl="/" />

              {/* My Orders */}
              <button
                onClick={() => navigate("/myOrder")}
                className="px-4 py-2 lg:px-2 lg:py-0.5 md:px-4 md:py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition duration-300 shadow-md"
              >
                My Orders
              </button>
            </div>
          </SignedIn>
          {/* Cart */}
          <BilingCart />
        </div>

        <div
          className="flex flex-col lg:hidden p-2 gap-2 md:gap-6  relative"
          ref={showRef}
        >
          <HiOutlineBars3
            className="font-extrabold text-2xl text-emerald-800"
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
          {isShow && (
            <div className="flex flex-col absolute right-0 top-12 w-35 rounded-xl bg-white shadow-lg border p-4 z-999 gap-2.5">
              <SignedOut>
                {/* Login */}
                <div
                  onClick={() => navigate("/login")}
                  className="flex items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300 font-bold gap-1.5"
                >
                  <FaUserCircle className="text-xl" />
                  <p className="text-sm font-bold">Login</p>
                </div>

                {/* Signup */}
                <div
                  onClick={() => navigate("/signup")}
                  className="flex items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300 font-bold gap-1.5"
                >
                  <FaSignInAlt className="text-xl" />
                  <p className="text-sm font-bold">Sign Up</p>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="flex flex-col  lg:flex-row items-center gap-1.5">
                  {/* Greeting */}
                  <UserButton afterSignOutUrl="/" />

                  <div className="text-right flex flex-col justify-center items-center lg:block md:block">
                    <p className="text-xs font-bold text-gray-400">Welcome</p>
                    <p className="font-bold text-emerald-800 ">
                      {user?.firstName}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsShow(false);
                      navigate("/myOrder");
                    }}
                    className="px-3.5 py-2 md:px-4 md:py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition duration-300 shadow-md"
                  >
                    My Orders
                  </button>
                </div>
              </SignedIn>
              {/* Cart */}

              <BilingCart />
             
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
