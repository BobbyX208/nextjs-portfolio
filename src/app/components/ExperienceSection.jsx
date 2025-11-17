"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

const experienceData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Led a team of 5 developers in building a SaaS platform serving 50k+ users",
      "Reduced application load time by 40% through performance optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 3 junior developers to senior level within 2 years"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    type: "Full-time"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects focusing on e-commerce and web applications.",
    achievements: [
      "Built 15+ responsive web applications for various clients",
      "Integrated payment systems increasing conversion by 25%",
      "Improved code quality reducing bugs by 30%",
      "Collaborated with UX designers to implement user-friendly interfaces"
    ],
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Stripe", "Jest"],
    type: "Full-time"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCraft Studios",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Focused on creating responsive and accessible user interfaces for various digital products.",
    achievements: [
      "Developed 20+ reusable React components",
      "Improved website accessibility score from 70 to 95",
      "Reduced bundle size by 35% through code splitting",
      "Worked closely with backend team on API integration"
    ],
    technologies: ["React", "Redux", "SASS", "Webpack", "Jest", "Cypress"],
    type: "Full-time"
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Boston, MA",
    period: "2018 - 2019",
    description: "Started my professional journey building foundational web development skills and working on small to medium projects.",
    achievements: [
      "Built and maintained company website and blog",
      "Assisted in developing internal tools and dashboards",
      "Learned agile development methodologies",
      "Participated in code reviews and team meetings"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
    type: "Full-time"
  }
];

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(1);
  const timelineRef = useRef(null);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#061222] to-[#123249]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#74C6EE] to-[#447794] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey through the tech industry
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className="relative max-w-6xl mx-auto bg-[#061222]/40 backdrop-blur-lg rounded-3xl border-2 border-[#2D5B75] p-8 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gradient-to-b from-[#447794] to-[#74C6EE] scrollbar-track-[#123249]"
        >
          {/* CENTRAL LINE AS PSEUDO-BACKGROUND */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-[#74C6EE] via-[#447794] to-[#74C6EE] rounded-full z-0"></div>

          {/* Timeline Items */}
          <div className="relative z-10 space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#74C6EE] rounded-full border-4 border-[#061222] z-20 shadow-lg shadow-[#74C6EE]/40 animate-pulse"></div>

                {/* Card */}
                <div
                  className={`w-[45%] min-h-[180px] bg-white/5 backdrop-blur-lg rounded-2xl border-2 p-6 transition-all duration-300 cursor-pointer
                    ${expandedId === exp.id ? 'border-[#74C6EE] shadow-2xl shadow-[#74C6EE]/40' : 'border-[#2D5B75]'}
                    hover:border-[#74C6EE] hover:shadow-2xl hover:-translate-y-1 hover:scale-105`}
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-[#74C6EE] font-semibold mb-2">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm bg-[#123249] px-2 py-1 rounded-full">{exp.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-200 text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />{exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />{exp.location}
                        </div>
                      </div>
                    </div>
                    <button className="ml-4 p-2 rounded-lg bg-[#123249] hover:bg-[#2D5B75] transition-colors flex-shrink-0">
                      {expandedId === exp.id ? <ChevronUpIcon className="w-5 h-5 text-[#74C6EE]" /> : <ChevronDownIcon className="w-5 h-5 text-[#74C6EE]" />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">{exp.description}</p>

                  {/* Expanded */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                      >
                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-md font-semibold text-white mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((a, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                                <div className="w-1.5 h-1.5 bg-[#74C6EE] rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-md font-semibold text-white mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((t, i) => (
                              <span key={i} className="bg-[#123249]/50 text-[#74C6EE] px-2 py-1 rounded text-xs font-medium border border-[#2D5B75]">{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">Scroll to explore more experiences</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Want to know more about my experience?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#74C6EE] via-[#447794] to-[#2D5B75] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Let's Connect
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
