"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer border-t border-[#2D5B75] bg-[#061222] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#447794] to-[#2D5B75] bg-clip-text text-transparent">
              𝔹𝕠𝕓𝕓𝕪
            </div>
            <div className="text-gray-400 text-sm">
              {currentTime}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Crafted with passion and precision
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#123249] mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Built with Next.js, Tailwind CSS, and ❤️ by 𝔹𝕠𝕓𝕓𝕪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;