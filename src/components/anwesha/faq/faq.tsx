"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaQuestionCircle, FaLink, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is the maximum number of members in a team?", answer: "A maximum of 2-3 members are allowed in a team as it will be an ICPC-style contest." },
    { question: "Can team members be from different colleges?", answer: "No, team members should be from the same college." },
    { question: "Can team members be from different years?", answer: "Yes, team members can be from different years." },
    { question: "Is there any participation fee?", answer: "No, there is no participation fee." },
    { question: "Is the 1st round online?", answer: "Yes, it will be held online on Codeforces." },
    { question: "Will students be provided accommodation and food in Stage 2?", answer: "Yes, APS will provide accommodation for the second round." },
  ];

  const links = [
    { label: "Register Now", url: "https://tinyurl.com/AlgoUtsav2025" },
    { label: "Ask for More Help", url: "/" },
  ];

  return (
    <div id="faq" className="flex justify-center mt-20 py-12 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Section - Title & Links */}
        <div className="md:w-1/2 w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
            <FaQuestionCircle className="text-green-400" size={40} />
          </motion.h2>

          <div className="mt-6 space-y-4">
            {links.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.url} target="_blank">
                  <div className="flex items-center justify-between p-4 text-lg font-semibold bg-white text-black hover:bg-cyan-400 transition-all duration-300 rounded-lg shadow-md cursor-pointer">
                    <span className="flex items-center gap-2">
                      <FaLink size={20} className="text-blue-500" />
                      {link.label}
                    </span>
                    <span>➔</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - FAQ List */}
        <motion.div
          className="md:w-1/2 w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`p-5 rounded-xl shadow-lg transition-all duration-300 ${
                openIndex === index ? "bg-opacity-90 backdrop-blur-lg bg-gray-700" : "bg-gray-900 bg-opacity-60 backdrop-blur-lg"
              } cursor-pointer border border-gray-600 hover:shadow-xl`}
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <FaChevronUp size={18} className="text-gray-300" /> : <FaChevronDown size={18} className="text-gray-300" />}
                </motion.span>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 text-sm text-gray-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
