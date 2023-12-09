"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { nav_links } from "@/constants";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <motion.header className="top-0 left-0 w-full fixed z-[9999] py-5 md:px-8 px-4 bg-white border-b"
      initial={{y:-250}}
      animate={{y:0}}
      transition={{delay:0.2, type: 'spring', stiffness: 100}}

      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-10">
              <Link href={"/"}>
                <Image
                  src={"/origin_logo.png"}
                  width={200}
                  height={200}
                  alt="Image"
                />
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-14 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-blue-950  font-bold text-lg"
                          : "text-blue-950 text-lg hover:text-blue-950 hover:font-semibold ease-in-out duration-300 font-sans"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-sans">
              <div className="hidden lg:flex flex-col">
                <div className="flex gap-3 justify-start items-center pb-1">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 text-lg font-semibold  rounded text-white px-4 sm:px-8 border border-indigo-700 py-3">
                    Contact us
                  </button>
                </div>
              </div>
              <button className="block lg:hidden" onClick={navHandle}>
                {!nav ? <HiBars3 size={35} /> : <LiaTimesSolid size={35} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed top-20 left-24 w-[60%] bg-gray-50 ease-in-out duration-500"
            : "fixed top-[-100%]"
        }
      >
        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.key} className="p-4 border-b border-gray-200">
              <a
                href={link.href}
                className="uppercase text-gray-900 flex justify-center items-center"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
