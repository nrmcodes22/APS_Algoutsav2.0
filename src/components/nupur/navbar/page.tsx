"use client";
import React, { useState } from "react";
import "flowbite";
//import Link from "next/link";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] z-50 mt-5 rounded-full bg-gradient-to-r from-indigo-800 via-black to-purple-700 shadow-lg border-2 border-indigo-600 transition-all duration-300">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2 h-12">
            
            {/* Left Logo */}
            <div className="relative rounded-full">
              <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[900px]:flex space-x-6">
              {[
                { name: "About AU", link: "#about" },
                { name: "Stats 2024", link: "#stats" },
                { name: "Sponsors", link: "#sponsors" },
                { name: "Timeline", link: "#timeline" },
                { name: "Gallery", link: "#gallery" },
                { name: "FAQs", link: "#faq" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-indigo-200 font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-lg hover:text-indigo-300 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Image or Hamburger Menu */}
            <div className="relative">
              {/* Show Image on Medium+ Screens */}
              <div className="hidden min-[900px]:block rounded-full">
                <Image src="/images/algoutsavlogo.png" width={50} height={50} alt="Right Logo" />
              </div>

              {/* Show Hamburger on Small Screens */}
              <div className="min-[900px]:hidden">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color="#fff" rounded />
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-14 left-0 w-full bg-gradient-to-r from-blue-900 via-black to-purple-800 md:hidden z-30 shadow-2xl border border-indigo-500 transition-all duration-300 rounded-lg backdrop-blur-md">
              <ul className="flex flex-col p-5 font-semibold text-center space-y-3">
                {[
                  { name: "About AU", link: "#about" },
                  { name: "Stats 2024", link: "#stats" },
                  { name: "Sponsors", link: "#sponsors" },
                  { name: "Timeline", link: "#timeline" },
                  { name: "Gallery", link: "#gallery" },
                  { name: "FAQs", link: "#faq" }
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block py-3 px-5 text-indigo-200 bg-transparent hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out rounded-lg shadow-md"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
