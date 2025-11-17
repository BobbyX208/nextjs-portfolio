"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Simple floating particle component
const FloatingParticle = ({ delay, size, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 2, delay }}
    className={`absolute rounded-full bg-[#74C6EE]`}
    style={{ width: size, height: size, top: y, left: x }}
  >
    <motion.div
      animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="w-full h-full bg-[#74C6EE]/60 rounded-full blur-md"
    />
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Parallax transform
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative lg:py-36 py-24 overflow-hidden bg-[#061222]"
    >
      {/* Background gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061222] via-[#0B1A2A] to-[#123249] opacity-80 pointer-events-none"></div>

      {/* Floating Particles */}
      <FloatingParticle delay={0.3} size={16} x="10%" y="20%" />
      <FloatingParticle delay={1} size={10} x="80%" y="30%" />
      <FloatingParticle delay={1.5} size={20} x="60%" y="80%" />
      <FloatingParticle delay={2} size={14} x="30%" y="60%" />

      <div className="relative grid grid-cols-1 sm:grid-cols-12 items-center gap-20 z-10 px-4 sm:px-8">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-8 text-center sm:text-left"
        >
          <p className="text-[#74C6EE] text-lg font-semibold tracking-widest uppercase mb-4">
            Hello, I'm
          </p>

          {/* Name with animated underline */}
          <div className="inline-block relative">
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-[#74C6EE] via-[#447794] to-[#123249]"
            >
              𝔹𝕠𝕓𝕓𝕪
            </h1>

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r 
                         from-[#74C6EE] to-[#447794] rounded-full"
            />
          </div>

          <div className="mt-6 mb-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 1000,
                "UI/UX Enthusiast", 1000,
                "Problem Solver", 1000,
                "Tech Innovator", 1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90"
              repeat={Infinity}
            />
          </div>

          {/* Bio */}
          <p className="text-gray-300/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-12">
            Building <span className="text-[#74C6EE] font-semibold">delightful digital experiences</span> through clean interfaces, smooth interactions, and scalable engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/#contact"
                className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl
                           bg-gradient-to-r from-[#74C6EE] to-[#447794] text-black
                           hover:brightness-110 transition duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/"
                className="group px-1 py-1 rounded-2xl bg-gradient-to-r from-[#447794] to-[#2D5B75]"
              >
                <span
                  className="block bg-[#061222] rounded-2xl px-8 py-4 text-white text-lg font-semibold
                             group-hover:bg-[#0D1B29] transition-all duration-300"
                >
                  Download CV
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Premium Stats */}
          <div className="flex flex-wrap gap-14 mt-16 pt-10 border-t border-white/10">
            {[
              { value: "5+", label: "Years Experience", icon: "⚙️" },
              { value: "100+", label: "Projects Completed", icon: "🚀" },
              { value: "50+", label: "Happy Clients", icon: "✨" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE AREA WITH PARALLAX */}
        <motion.div
          style={{ y: imageY }}
          className="col-span-4 flex justify-center relative"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r 
                            from-[#74C6EE]/40 to-[#447794]/40 rounded-full 
                            blur-3xl opacity-70 animate-[pulse_6s_ease_infinite]"></div>

            {/* Glass frame */}
            <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl
                            border border-white/10 shadow-2xl
                            w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] overflow-hidden">
              
              <Image
                src="/images/hero-image.png"
                alt="𝔹𝕠𝕓𝕓𝕪 Developer Portrait"
                fill
                className="object-cover scale-[1.04] hover:scale-[1.1] duration-700"
                priority
              />
            </div>

            {/* Availability Badge */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2
                            bg-[#74C6EE] text-black px-5 py-2 rounded-full
                            text-sm font-bold shadow-lg flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
              Available for work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
