"use client";

import React, { useState } from "react";
function Hero() {
  return (
    <div
      className="mt-20 flex justify-center items-center bg-white pb-12 overflow-y-hidden"
    >
      {/* Code block starts */}
      <div className="bg-white">
        <div className=" md:mx-auto flex flex-col md:items-center py-12 sm:py-24 px-4">
          <div className="sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-6xl md:text-center text-gray-800 font-black leading-none">
              Your Trusted Gateway to{" "}
              <span className="text-indigo-700"> Healthcare </span> Innovations
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 md:text-center text-lg">
              Welcome to our Pharmacy, where healthcare knows no bounds. We
              specialize in importing top-tier medicines and cutting-edge
              medical equipment, uniting global innovations to serve your
              well-being. 
            </p>
          </div>
          <div className="flex justify-start items-start">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 text-xl font-bold  rounded text-white px-10 border border-indigo-700 py-4">
              About us
            </button>
            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 text-xl font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-10 py-4">
              Products
            </button>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
}

export default Hero;
