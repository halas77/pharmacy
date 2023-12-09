"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div className="mt-20 flex justify-center items-center bg-white pb-12 overflow-y-hidden">
      <motion.div
        className="flex p-40 bg-indigo-50 rounded-l-full absolute top-0 right-0"
        initial={{ x: "100vw" }}
        animate={{ x: "0" }}
        transition={{ duration: "2", delay: "0.1" }}
      ></motion.div>
      <motion.div
        className="flex py-32 px-16 bg-indigo-50 rounded-r-full absolute top-96 left-0  z-0"
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        transition={{ duration: "2", delay: "0.4" }}
      ></motion.div>
      <div className="bg-white">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24 px-4">
          <motion.div
            className="sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: "2", delay: "0.2" }}
          >
            <h1 className="text-6xl md:text-center text-gray-800 font-black leading-none z-10">
              Your Trusted Gateway to{" "}
              <span className="text-indigo-700"> Healthcare </span> Innovations
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 md:text-center text-lg z-10">
              Welcome to our Pharmacy, where healthcare knows no bounds. We
              specialize in importing top-tier medicines and cutting-edge
              medical equipment, uniting global innovations to serve your
              well-being.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-start sm:justify-center w-full"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: "2", delay: "0.3" }}
          >
            <Link href={"/about"}>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 text-xl font-bold  rounded text-white px-10 border border-indigo-700 py-4">
                About us
              </button>
            </Link>
            <Link href={"/product"}>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 text-xl font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-10 py-4">
                Products
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
