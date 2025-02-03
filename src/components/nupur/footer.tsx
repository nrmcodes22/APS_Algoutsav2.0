"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-10 relative">
      {/* Stylish Gradient Line on Top */}
      <div className="h-[4px] w-[90%] mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>

      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8 text-center md:text-left">
        {/* Top Section - Logos */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
            <div className="h-[50px] w-[2px] bg-gradient-to-b from-gray-500 to-transparent"></div>
            <Image src="/images/algoutsavlogo.png" width={60} height={60} alt="AlgoUtsav Logo" />
          </div>

          {/* Social Icons with Glow Effect */}
          <ul className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            {[
              { link: "https://www.linkedin.com/company/aps-nitr/", img: "linkedin.svg" },
              { link: "https://www.instagram.com/aps.nitr/", img: "instagram.svg" },
              { link: "https://www.threads.net/@aps.nitr", img: "threads.svg" },
              { link: "https://www.youtube.com/@APSNITR", img: "yt.svg" },
              { link: "https://x.com/ApsocietyNitr?mx=24", img: "x.svg" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-400/50"
                >
                  <Image src={`/images/${item.img}`} width={30} height={30} alt="Social Icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Section - Links */}
        {/* <ul className="flex flex-wrap justify-center mt-6 space-x-6 text-sm font-medium text-gray-500">
          {["About Us", "Events", "Sponsors", "Gallery", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-indigo-500 transition-all duration-300 hover:opacity-80"
              >
                {item}
              </a>
            </li>
          ))}
        </ul> */}

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-500 mt-6 text-sm">
          <p>© {new Date().getFullYear()} AlgoUtsav | APS NIT Rourkela. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
