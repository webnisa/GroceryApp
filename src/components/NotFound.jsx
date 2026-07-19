import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import animation from "../assets/404.lottie";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="w-80 md:w-150 lg:w-180">
        <DotLottieReact
          src={animation}
          autoplay
          loop
        />
      </div>

      <h1 className="text-4xl font-bold mt-4">404</h1>

      <p className="text-gray-600 text-center mt-2">
        Oops! Page not found.
      </p>

      <Link
        to="/"
        className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;