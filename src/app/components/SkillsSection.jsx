"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-white">{skill.name}</span>
        <span className="text-[#447794] font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-[#123249] rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#447794] to-[#2D5B75] h-3 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 70 },
    { name: "Python", level: 65 },
    { name: "Docker", level: 60 },
  ];

  return (
    <section className="text-white py-16 bg-gradient-to-b from-[#061222] to-[#123249]" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#447794] to-[#2D5B75] mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here's a breakdown of my technical expertise across various technologies and tools
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Git', 'Docker', 'Jenkins', 'Jest', 'Webpack', 'Figma', 'MongoDB', 'Redis'].map((tool) => (
              <div key={tool} className="bg-[#123249] p-4 rounded-lg text-center border border-[#2D5B75] hover:border-[#447794] transition-colors">
                <span className="text-white font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;