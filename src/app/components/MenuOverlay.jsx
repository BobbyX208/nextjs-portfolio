import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-[#061222] bg-opacity-95 backdrop-blur-sm border-b border-[#2D5B75] shadow-lg">
      <ul className="flex flex-col py-4 px-6 space-y-3">
        {links.map((link, index) => (
          <li key={index} className="w-full">
            <div className="bg-[#123249] bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all duration-300">
              <NavLink href={link.path} title={link.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;