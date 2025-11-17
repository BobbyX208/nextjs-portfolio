"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="relative group">
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
        {title}
      </span>
      <motion.div 
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#447794] to-[#2D5B75] group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
};

export default NavLink;