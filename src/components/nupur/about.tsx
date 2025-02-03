"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ColourfulText from "@/components/ui/colourful-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
 
const words = `AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela. This ICPC-style competition is meticulously designed to challenge your problem-solving prowess through a diverse array of competitive programming problems. Complementing the contest are inspiring guest sessions, entertaining activities, and exciting giveaways.
`;
export default function About() {
  return (

    <div className="flex flex-col items-center justify-center h-screen w-full md:w-[90%] m-auto" id="about">
      <motion.div
        className="text-center rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="mt-6 md:mt-0 font-display text-xl  md:text-4xl text-white ">About <ColourfulText text="AlgoUtsav" /></h2>
        {/* <p className="mt-4 text-sm md:text-lg  text-gray-200">AlgoUtsav is an esteemed event organized by the Algorithmic and Programming Society (APS) of NIT Rourkela, operating under the Technical Society of the Student Activity Centre (SAC), NIT Rourkela. This ICPC-style competition is meticulously designed to challenge your problem-solving prowess through a diverse array of competitive programming problems. Complementing the contest are inspiring guest sessions, entertaining activities, and exciting giveaways.</p> */}
        <TextGenerateEffect duration={2} filter={false} words={words} />
        <a
          href="https://whatsapp.com/channel/0029VaEEb2d65yDL4o8Ya01k"
          target="_blank"
          className="flex flex-wrap items-center gap-2 mb-10 justify-center font-semibold text-gray-500 dark:text-gray-400 font-montserrat mt-10 hover:underline"
        >
          <span className="text-base md:text-xl">Join Our Whatsapp Community</span>
          <Image
            src="/images/wp.svg"
            width={30}
            height={30}
            alt="WhatsApp Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
        </a>

      </motion.div>

    </div>



  );
}