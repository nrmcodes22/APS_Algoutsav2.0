import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const styles = {
  sectionHeadText:
    "text-white font-black md:text-5xl text-3xl font-montserrat tracking-wider",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const checkpoints = [
  {
    title: "Preliminary Team Contest",
    date: "February 15th, 2025 (2:00PM to 4:30PM)",
    details: [
      { label: "Team Size", value: "2 - 3 Members" },
      { label: "Duration", value: "150 minutes" },
      { label: "Platform", value: "CodeForces" },
      { label: "Eligibility", value: "All Indian Institutes" },
      { label: "Mode", value: "Online" },
    ],
  },
  {
    title: "ICPC Style Coding Contest",
    date: "March 8th, 2025 (4:00PM to 7:00PM)",
    details: [
      { label: "Team Size", value: "2 - 3 Members" },
      { label: "Duration", value: "180 minutes" },
      { label: "Platform", value: "CodeForces" },
      { label: "Eligibility", value: "Shortlisted Teams Only" },
      { label: "Mode", value: "Offline" },
    ],
  },
  {
    title: "Individual Coding Contest",
    date: "March 9th, 2025 (2:30PM to 4:30PM)",
    details: [
      { label: "Team Size", value: "1 Member" },
      { label: "Duration", value: "180 minutes" },
      { label: "Platform", value: "CodeForces" },
      { label: "Eligibility", value: "Shortlisted Teams Only" },
      { label: "Mode", value: "Offline" },
    ],
  },
];

type CheckpointProps = {
  checkpoint: {
    title: string;
    date: string;
    details: { label: string; value: string }[];
  };
};

const TimelineCard: React.FC<CheckpointProps> = ({ checkpoint }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={checkpoint.date}
    iconStyle={{ background: "#1d1836", color: "#fff" }}
    icon={<TimelineIcon />}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{checkpoint.title}</h3>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {checkpoint.details.map((detail, index) => (
        <li key={index} className="text-gray-300 text-[14px] pl-1 tracking-wider">
          <strong>{detail.label}:</strong> {detail.value}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline = () => {
  return (
    <section id="timeline" className="py-10">
      <motion.div className="text-center">
        <p className={styles.sectionHeadText}>Contest Timeline</p>
      </motion.div>
      <div className="mt-10">
        <VerticalTimeline>
          {checkpoints.map((checkpoint, index) => (
            <TimelineCard key={index} checkpoint={checkpoint} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

const TimelineIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="30 5 5 54"><linearGradient id="W68hGGKaiwyivXUEOY5qja" x1="18" x2="18" y1="27.915" y2="31.689" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><circle cx="18" cy="30" r="2" fill="url(#W68hGGKaiwyivXUEOY5qja)"/><linearGradient id="W68hGGKaiwyivXUEOY5qjb" x1="46" x2="46" y1="28.106" y2="31.384" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><circle cx="46" cy="30" r="2" fill="url(#W68hGGKaiwyivXUEOY5qjb)"/><linearGradient id="W68hGGKaiwyivXUEOY5qjc" x1="32" x2="32" y1="14.947" y2="20.788" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><circle cx="32" cy="18" r="3" fill="url(#W68hGGKaiwyivXUEOY5qjc)"/><linearGradient id="W68hGGKaiwyivXUEOY5qjd" x1="33" x2="33" y1="38.702" y2="43.529" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"/><stop offset="1" stopColor="#e6abff"/></linearGradient><circle cx="33" cy="42" r="3" fill="url(#W68hGGKaiwyivXUEOY5qjd)"/><g><linearGradient id="W68hGGKaiwyivXUEOY5qje" x1="32" x2="32" y1="6.404" y2="58.342" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#W68hGGKaiwyivXUEOY5qje)" d="M51,6H13c-2.757,0-5,2.243-5,5v38v4c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V11 C56,8.243,53.757,6,51,6z M51,56H13c-1.654,0-3-1.346-3-3v-0.026C10.838,53.609,11.87,54,13,54h38c1.13,0,2.162-0.391,3-1.026V53 C54,54.654,52.654,56,51,56z M54,49c0,1.654-1.346,3-3,3H23v-6c0-1.654,1.346-3,3-3h2.101c0.465,2.279,2.484,4,4.899,4 c2.757,0,5-2.243,5-5s-2.243-5-5-5c-2.414,0-4.434,1.721-4.899,4H26c-2.757,0-5,2.243-5,5v6h-8c-1.654,0-3-1.346-3-3V11 c0-1.654,1.346-3,3-3h29v6c0,1.654-1.346,3-3,3h-2.101c-0.465-2.279-2.484-4-4.899-4c-2.757,0-5,2.243-5,5s2.243,5,5,5 c2.414,0,4.434-1.721,4.899-4H39c2.757,0,5-2.243,5-5V8h7c1.654,0,3,1.346,3,3V49z M30,42c0-1.654,1.346-3,3-3s3,1.346,3,3 s-1.346,3-3,3S30,43.654,30,42z M35,18c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3S35,16.346,35,18z"/><linearGradient id="W68hGGKaiwyivXUEOY5qjf" x1="32" x2="32" y1="6.404" y2="58.342" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"/><stop offset="1" stopColor="#c822ff"/></linearGradient><path fill="url(#W68hGGKaiwyivXUEOY5qjf)" d="M46,24c-2.967,0-5.431,2.167-5.91,5H23.91c-0.478-2.833-2.942-5-5.91-5c-3.309,0-6,2.691-6,6 s2.691,6,6,6c2.967,0,5.431-2.167,5.91-5H40.09c0.478,2.833,2.942,5,5.91,5c3.309,0,6-2.691,6-6S49.309,24,46,24z M18,34 c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S20.206,34,18,34z M46,34c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4 S48.206,34,46,34z"/></g></svg>
  )
}

export default Timeline;
