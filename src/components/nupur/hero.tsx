"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
         
         <div className="flex flex-col items-center justify-center mt-40 md:mt-60 w-[95%] mx-auto ">
        <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Image src="/images/algo.png" width={1000}
   height={1000} alt="Flowbite Logo" className=" md:mb-8"/>
        </motion.div>
        <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        > 
   <div className="max-w-xl text-center "><p className="font-montserrat text-gray-400 text-sm md:text-xl">AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela</p></div>    
   </motion.div>
   </div>
   <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        > 
   <a
  href="https://tinyurl.com/AlgoUtsav2025" 
  target="_blank" 
  rel="noopener noreferrer"
> <button type="button" className="text-gray-700
 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg    text-xs md:text-sm px-3 md:px-5 py-1 md:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-10">

Register Now 
<svg className="w-2 md:w-4 h-2 md:h-4 ml-2 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
</button></a>
  
</motion.div>       
   </div>        
    );
}