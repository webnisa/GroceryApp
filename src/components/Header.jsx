import React from "react";
import logo from "../assets/images/logo.jpg";

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
  const { cartTotal, cart, showBill, setshowBill, search, setSearch } =
    useContext(AppContext);

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="p-4">
      <nav className="flex flex-wrap justify-between w-full p-2 h-16 rounded-2xl border-2 border-gray-200">
        <div
          className="flex justify-center items-center h-10 w-auto gap-1"
          onClick={() => {
            navigate("/");
            setSearch("");
          }}
        >
          <img
            src={logo}
            className="h-10 w-10 rounded-4xl object-cover cursor-pointer"
          ></img>
          <p className="text-emerald-800 text-xl md:text-2xl font-bold cursor-pointer">
            Grocery
          </p>
        </div>

        <SeachBar />

        <Location />

        <div className="flex items-center gap-2 md:gap-6">
          <SignedOut>
            {/* Login */}
            <div
              onClick={() => navigate("/login")}
              className="flex flex-col items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300"
            >
              <FaUserCircle className="text-3xl" />
              <p className="text-sm font-semibold">Login</p>
            </div>

            {/* Signup */}
            <div
              onClick={() => navigate("/signup")}
              className="flex flex-col items-center cursor-pointer text-emerald-800 hover:text-emerald-600 transition duration-300"
            >
              <FaSignInAlt className="text-xl md:text-3xl" />
              <p className="text-sm font-semibold">Sign Up</p>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-4">
              {/* Greeting */}
              <div className="text-right hidden md:block">
                <p className="text-xs text-gray-500">Welcome</p>
                <p className="font-bold text-emerald-800">{user?.firstName}</p>
              </div>

              {/* Clerk Avatar */}
              <UserButton afterSignOutUrl="/" />

              {/* My Orders */}
              <button
                onClick={() => navigate("/myOrder")}
                className="px-2 py-0.5 md:px-4 md:py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition duration-300 shadow-md"
              >
                My Orders
              </button>
            </div>
          </SignedIn>

          {/* Cart */}
          <BilingCart />
        </div>
      </nav>
    </div>
  );
};

export default Header;
