"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">Node.js</span>
          </div>
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">Express</span>
          </div>
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">PostgreSQL</span>
          </div>
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">Sequelize</span>
          </div>
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">JavaScript</span>
          </div>
          <div className="bg-[#123249] p-3 rounded-lg border-l-4 border-[#447794]">
            <span className="font-semibold text-white">React</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="bg-[#123249] p-4 rounded-lg border-l-4 border-[#2D5B75]">
          <h3 className="font-bold text-white text-lg">Fullstack Academy of Code</h3>
          <p className="text-gray-300">Immersive Web Development Program</p>
          <p className="text-sm text-[#447794]">2023</p>
        </div>
        <div className="bg-[#123249] p-4 rounded-lg border-l-4 border-[#2D5B75]">
          <h3 className="font-bold text-white text-lg">University of California, Santa Cruz</h3>
          <p className="text-gray-300">Bachelor's Degree</p>
          <p className="text-sm text-[#447794]">2019-2023</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="bg-[#123249] p-4 rounded-lg border-l-4 border-[#447794]">
          <h3 className="font-bold text-white text-lg">AWS Cloud Practitioner</h3>
          <p className="text-gray-300">Amazon Web Services</p>
          <p className="text-sm text-[#447794]">Valid until 2025</p>
        </div>
        <div className="bg-[#123249] p-4 rounded-lg border-l-4 border-[#447794]">
          <h3 className="font-bold text-white text-lg">Google Professional Cloud Developer</h3>
          <p className="text-gray-300">Google Cloud</p>
          <p className="text-sm text-[#447794]">Valid until 2024</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#447794] to-[#2D5B75] mx-auto rounded-full"></div>
        </div>
        
        <div className="md:grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#447794] to-[#2D5B75] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Image 
                src="/images/about-image.png" 
                width={500} 
                height={500} 
                className="rounded-2xl shadow-2xl"
                alt="About Me"
              />
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              I am a passionate full stack web developer with expertise in creating 
              interactive and responsive web applications. With experience in 
              <span className="text-[#447794] font-semibold"> JavaScript, React, Node.js, Express, </span>
              and modern databases, I thrive on transforming complex problems into 
              elegant solutions. I'm constantly learning and adapting to new technologies 
              while maintaining a strong focus on clean code and user experience.
            </p>
            
            <div className="bg-[#061222] rounded-xl p-1 border border-[#123249] mb-6">
              <div className="flex flex-row justify-start space-x-1">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certifications
                </TabButton>
              </div>
            </div>
            
            <div className="mt-4 min-h-[200px] transition-all duration-300">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;