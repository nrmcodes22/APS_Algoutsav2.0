"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "/",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <>
    <h2 className="text-white text-3xl font-bold tracking-wide text-center">Meet our team</h2>
    <div className="flex flex-row items-center justify-center mt-10 mb-10 w-full">
        
      <AnimatedTooltip items={people} />
    </div>
    </>
  );
}
