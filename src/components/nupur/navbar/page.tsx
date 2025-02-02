"use client";
import React, { useState } from "react";
import "flowbite";
import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-gray-700 z-50 mt-5 rounded-full border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="Flowbite Logo"
            className="mx-2 md:mx-10"
          />

          {/* Desktop Navigation Options */}
          <div className="hidden md:flex space-x-6">
            
              <a 
              href="#about" className="text-white hover:text-blue-500">About AU</a>
            
            <a
              href="#stats"
              className="text-white hover:text-blue-500"
            >
              Stats 2024
            </a>
            <a
              href="#sponsers"
              className="text-white hover:text-blue-500"
            >
              Sponsors
            </a>
            <a
              href="#timeline"
              className="text-white hover:text-blue-500"
            >
              Timeline
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-blue-500"
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="text-white hover:text-blue-500"
            >
              FAQs
            </a>
          </div>
          
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Image
            src="/images/algoutsavlogo.png"
            width={60}
            height={60}
            alt="Flowbite Logo"
            className="mx-1 md:mx-9"
          />

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={24}
                color="#fff"
                rounded
              />
            </div>
          </div>

          {/* Sliding Mobile Dropdown Menu */}
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-gray-700 md:hidden z-30"
            >
              <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-700">
                <li>
                  <Link href="#about" legacyBehavior>
                    <a
                      className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500 
                      hover:text-lg
                      md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      About AU
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#stats"
                    className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500
                    hover:text-lg md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Stats 2024
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsers"
                   className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500 
                   hover:text-lg md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sponsors
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                   className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500 
                   hover:text-lg md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Timeline
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                   className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500 
                   hover:text-lg
                   md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                   className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-500 
                   hover:text-lg md:hover:bg-transparent hover:text-gray-900 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
              
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
