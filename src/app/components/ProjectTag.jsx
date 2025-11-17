import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-[#447794] to-[#2D5B75] border-transparent shadow-lg"
    : "text-gray-300 bg-[#061222] border-[#2D5B75] hover:border-[#447794] hover:text-white";

  return (
    <motion.button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 font-medium transition-all duration-300 hover:scale-105`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;