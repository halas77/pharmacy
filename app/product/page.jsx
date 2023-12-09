"use client";

import { product } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section class="bg-white mt-20">
      <motion.div
        class="px-5 md:px-14 lg:px-20 py-10 mx-auto"
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: "1", delay: "0.1" }}
      >
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
          Products
        </h1>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {product.map((item, index) => (
            <div class="lg:flex" key={item.id}>
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src={item.img}
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" class="text-xl font-semibold text-gray-800">
                  {item.title}
                </a>
                <span class="text-sm text-gray-500 ">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default page;
