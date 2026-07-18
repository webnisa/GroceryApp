import React from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex bg-emerald-900 text-xl md:text-2xl lg:text-2xl text-white justify-evenly items-center w-full mt-3 p-4 lg:p-10">
        <div className="flex gap-1 lg:gap-2 justify-center items-center">
          <img src={logo} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full object-cover"></img>
          <h1>Grocery</h1>
        </div>

        <div>
          <ul className="space-y-0.5 lg:space-y-2 text-sm lg:text-xl cursor-pointer">
            <li>
              <Link
                to="/"
                className="hover:text-lime-300"
                onClick={() => {
                  setSearch("");
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-lime-300">
                Products
              </Link>
            </li>

          </ul>
        </div>

        <div className="flex flex-col gap-1 lg:gap-3 text-sm md:text-xl lg:text-2xl">
          <p>Follow on</p>
          <div className="flex gap-1 text-xl md:text-2xl md:gap-2 lg:gap-2 lg:text-2xl cursor-pointer">
            <FaFacebook />
            <AiFillInstagram />
            <FaGithub />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-8 lg:h-13 text-sm text-gray-300 bg-emerald-800">
        © 2026 Grocery. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
