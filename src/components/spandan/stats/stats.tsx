"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
 
const words = `Last year, AlgoUtsav emerged as a remarkable success, solidifying its reputation as one of the 
            leading ICPC-style coding events in India. The winners were felicitated with lucrative cash prizes, 
            recognizing their exceptional performance and hard work. AlgoUtsav 2024 not only provided a 
            platform for excellence but also celebrated the talent and determination of budding programmers.
`;
interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}+</span>;
};

const Stats = () => {
  return (
    <div id="stats" className="w-full flex flex-col items-center justify-center mt-20 px-6 md:px-0">
      <motion.div
        className="text-center w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Emphasized AlgoUtsav 2024 Text */}
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-white font-black md:text-5xl text-3xl font-montserrat tracking-wider mb-10 ">
            Previous Year Statistics
          </h2>
          {/* <p className="mt-10 text-sm md:text-lg tracking-tight text-gray-200">
            
          </p> */}

            <TextGenerateEffect duration={1} filter={false} words={words} />
        </div>
      </motion.div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {[
          { number: 300, label: "Teams Participated" },
          { number: 95, label: "Colleges" },
          { number: 1000, label: "Participants" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl border border-gray-500 text-center shadow-2xl backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(50,50,50,0.8), rgba(200,200,200,0.1))",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-md">
              <AnimatedNumber value={stat.number} />
            </h3>
            <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
