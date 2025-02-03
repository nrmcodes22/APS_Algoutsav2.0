"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
   <>
  
<div  className="flex  items-center justify-center">
<motion.div
    className="text-center rounded-xl p-10 shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}  
  >
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
            <h2 className="mb-10 text-white font-black md:text-5xl text-3xl font-montserrat tracking-wider">Takeaways</h2>
        </div>
        
<div className="flex items-center justify-center">
   
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
       
        <div className="space-y-8  lg:grid md:grid-cols-2 lg:space-y-0 lg:gap-10">
           
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-gray-300
 p-6 text-gray-800 shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]
                 xl:p-8">

                <h2 className="text-2xl font-semibold ">Team Contest</h2>
                
                
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-800  text-sm">
                    <li className="flex items-center space-x-3 ">
                       <Image src="/images/1st-prize.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">Winners : 39000 INR </span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <Image src="/images/2nd-place.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">1st Runners Up : 32000 INR </span>
                        
                        
                    </li>
                    <li className="flex items-center space-x-3">
                        
                    <Image src="/images/3rd-place.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">2nd Runners Up : 23000 INR </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        
                    <Image src="/images/hoodie.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">AlgoUtsav Exclusive Merch for every participant.</span>
                    </li>
                    
                </ul>

            </div>
            
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-cyan-300 p-6 text-gray-900 xl:p-8 shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]">
                    
                    <h2 className="text-2xl font-semibold ">Individual Contest</h2>
                
                
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-900  text-sm">
                    <li className="flex items-center space-x-3 ">
                       <Image src="/images/1st-prize.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">Winners : 24000 INR </span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <Image src="/images/2nd-place.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">1st Runners Up : 19000 INR </span>
                        
                        
                    </li>
                    <li className="flex items-center space-x-3">
                        
                    <Image src="/images/3rd-place.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">2nd Runners Up : 13000 INR </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        
                    <Image src="/images/hoodie.png" width={40}
                                          height={40} alt="Flowbite Logo" className=""/>
                        
                        <span className="text-lg font-semibold">AlgoUtsav Exclusive Merch for every participant. </span>
                    </li>
                </ul>

            </div>
            
            
        </div>
    </div>
   
    </div>
        </div>
    
    </motion.div>
    </div>
    
   
  


  </>
  );
}