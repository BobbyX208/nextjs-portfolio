import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? "text-white font-semibold" 
    : "text-gray-400 hover:text-white transition-colors duration-200";

  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-[#447794] to-[#2D5B75] mt-2 mr-3 rounded-full"
        transition={{ duration: 0.3, ease: "easeOut" }}
      ></motion.div>
    </button>
  );
};

export default TabButton;