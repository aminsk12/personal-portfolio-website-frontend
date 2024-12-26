"use client"
import { useGetAllExperiencesQuery } from "@/redux/features/experience/experienceApi";
import { motion } from "framer-motion";

const Experience = () => {
  const {
    data: experienceData,
    isLoading,
    error,
  } = useGetAllExperiencesQuery("");
  const experiences = experienceData?.data || [];

  return (
    <section id="experience" className="py-10 text-white mx-auto max-w-5xl">
      <motion.h2
        className="text-center text-3xl font-semibold text-white mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      {isLoading ? (
        <p className="text-center text-gray-400">Loading experiences...</p>
      ) : error ? (
        <p className="text-lg text-black text-center">
          {" "}
          I am a recent graduate eager to leverage my skills and knowledge in a
          professional setting. I am a quick learner and highly motivated to
          contribute to a dynamic team.
        </p>
      ) : experiences.length === 0 ? (
        <p className="text-lg text-black text-center">
          I am a recent graduate eager to leverage my skills and knowledge in a
          professional setting. I am a quick learner and highly motivated to
          contribute to a dynamic team.
        </p>
      ) : (
        <div className="space-y-8">
          {experiences.map((experience: any) => (
            <motion.div
              key={experience.id}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white text-black rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={
                  experience.companyLogo || "https://via.placeholder.com/150"
                } // Placeholder if no logo provided
                alt="Company Logo"
                className="w-20 h-20 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {experience.companyName}
                </h3>
                <p className="text-sm text-black">{experience.jobTitle}</p>
                <p className="text-sm text-black">
                  {experience.startDate} - {experience.endDate || "Present"}
                </p>
                {experience.location && ( // Only display location if provided
                  <p className="text-sm text-black">{experience.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;