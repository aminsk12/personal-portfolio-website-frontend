"use client"
import { motion } from "framer-motion";

import { ISkill } from "@/types";
import { useGetAllSkillsQuery } from "@/redux/features/skill/skillApi";


const Skills = () => {
  const { data: skillsData } = useGetAllSkillsQuery("");
  const skills = skillsData?.data;
// console.log(skills,"checkskill");

  // Framer Motion animation variants for each skill card
  const skillCardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with opacity and translateY
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    whileHover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    },
  };

// Soft skills data with updated icons
const softSkills = [
    { name: "Collaboration", icon: "🤝" },  
    { name: "Adaptability", icon: "🔄" },   
    { name: "Attention to Detail", icon: "🔍" },
    { name: "Time Management", icon: "⏳" }, 
    { name: "Communication", icon: "🗣️" },  
    { name: "Leadership", icon: "👑" },    
    { name: "Continuous Learning", icon: "📚" }, 
    { name: "Teamwork", icon: "👥" },  
    { name: "Networking", icon: "🌐" },  
  ];
  

  return (
    <section className="py-16 dark:text-white ">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Technical Skills Section */}
        <motion.h2
          className="text-center text-3xl font-semibold  mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Technologies
        </motion.h2>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {skills?.map((skill: ISkill) => (
            <motion.div
              key={skill._id}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center justify-center space-y-4 transition-transform"
              variants={skillCardVariants}
              whileHover="whileHover" // Hover animation
            >
              {/* Skill Image */}
              <motion.img
                src={skill.logo}
                alt={skill.label}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              />
              {/* Skill Name */}
              <motion.h3
                className="text-lg font-semibold"
                whileHover={{ color: "#0000" }} // Change text color on hover
                transition={{ duration: 0.3 }}
              >
                {skill.label}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.h2
          className="text-center text-3xl font-semibold dark:text-white mt-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Soft Skills
        </motion.h2>

        {/* Soft Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {softSkills.map((softSkill, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center justify-center space-y-4 transition-transform"
              variants={skillCardVariants}
              whileHover="whileHover" // Hover animation
            >
              {/* Soft Skill Icon */}
              <motion.div
                className="text-4xl"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                {softSkill.icon}
              </motion.div>
              {/* Soft Skill Name */}
              <motion.h3
                className="text-lg font-semibold text-black"
                whileHover={{ color: "#0000" }} // Change text color on hover
                transition={{ duration: 0.3 }}
              >
                {softSkill.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;