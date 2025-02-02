import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Ensure you have 'next/link' for navigation.
import { FaQuestionCircle, FaLink, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import different icons

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the maximum number of members in a team allowed ?",
      answer: "A maximum of 2-3 members are allowed in a team as it will be an ICPC-style contest.",
    },
    { question: "Can team members be from different colleges ?", answer: "No, team members should be from the same college." },
    { question: "Can team members be from different years ?", answer: "Yes, team members can be from different years." },
    { question: "Is there any participation fee ?", answer: "No, there is no particiption fee." },
    { question: "Is the 1st round online ?", answer: "Yes, it will held be online on Codeforces ." },
    { question: "Will students be provided accommodation and food in the Stage 2 ?", answer: "Yes, for the second APS will provide accommodation." },
  ];

  const links = [
   
    { label: "Register Now", url: "https://tinyurl.com/AlgoUtsav2025" }, // Link to Register page
    { label: "Ask for More Help", url: "/" }, // Link to Home or another help page
  ];

  return (
    <div id="faq" className="flex justify-center mt-10 py-10">
      <div className="w-[80%] flex flex-col md:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-5xl font-bold text-white my-4 flex items-center">
            Frequently Asked Questions
            <FaQuestionCircle className="ml-3 text-green-400" size={35} /> {/* Icon added */}
          </h2>
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.url} target="_blank">
                  <div
                    className="w-full flex items-center justify-between p-4 text-lg font-semibold bg-[white] text-[black] hover:bg-[cyan] rounded-lg shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <FaLink size={20} className="text-blue-500" /> {/* Link icon */}
                      {link.label}
                    </span>
                    <span>➔</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md ${openIndex === index ? "bg-gray-600" : "bg-gray-800"} text-white cursor-pointer`}
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <FaChevronDown size={18} /> : <FaChevronUp size={18} />} {/* Chevron icon */}
                </motion.span>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm mt-2">{faq.answer}</p>
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
