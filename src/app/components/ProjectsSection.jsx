"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Next.js", "React", "Tailwind"],
    gitUrl: "https://github.com/yourusername/portfolio",
    previewUrl: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Photography Portfolio Platform",
    description: "A stunning photography portfolio with advanced gallery features, image optimization, and client management system.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "React", "Node.js", "MongoDB"],
    gitUrl: "https://github.com/yourusername/photography-portfolio",
    previewUrl: "https://photography-demo.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "React", "Express", "PostgreSQL"],
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-demo.com",
  },
  {
    id: 4,
    title: "Food Delivery Mobile App",
    description: "Cross-platform mobile application for food delivery with real-time tracking and push notifications.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile", "React Native", "Firebase", "Redux"],
    gitUrl: "https://github.com/yourusername/food-delivery-app",
    previewUrl: "https://play.google.com/store/apps/details?id=com.foodapp",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "A reusable React template with Firebase authentication, CRUD operations, and responsive design.",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "React", "Firebase", "Material-UI"],
    gitUrl: "https://github.com/yourusername/react-firebase-template",
    previewUrl: "https://react-firebase-demo.netlify.app",
  },
  {
    id: 6,
    title: "Developer Learning Platform",
    description: "Interactive platform for developers to learn new technologies through hands-on projects and tutorials.",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Vue.js", "Node.js", "GraphQL"],
    gitUrl: "https://github.com/yourusername/dev-learning-platform",
    previewUrl: "https://learn-dev-platform.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#447794] to-[#2D5B75] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web and mobile development
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web", "Mobile", "Next.js", "React", "Full Stack"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <motion.ul
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tags={project.tag.filter(t => t !== "All")}
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;