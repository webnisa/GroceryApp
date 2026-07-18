import React from "react";

const Loader = () => {
  return (
    <div className="backdrop-blur-md fixed inset-0 bg-white/70 z-999">
      <div className="fixed h-1 top-0 left-0 w-full ">
        <div className="h-full w-1/3 bg-emerald-800 anima-loading"></div>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-30 h-30 lg:mt-35 lg:w-45 lg:h-45 rounded-full border-6 lg:border-10 border-gray-300 border-t-emerald-600 anima-spiner"></div>
        <p className="font-bold text-3xl text-emerald-800 mt-4">Loading....</p>
      </div>
    </div>
  );
};

export default Loader;